// Đọc chữ trích từ ảnh biên lai chuyển khoản (Phím tắt iPhone "Trích xuất văn bản từ ảnh")
// để điền sẵn form: số tiền, thu hay chi, ngày, ghi chú, đoán danh mục.

const plain = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();

// Dòng có các chữ này thường là số dư / phí, không phải số tiền giao dịch
const SKIP_LINE = /(so du|phi giao dich|phi chuyen|phi dich vu|\bphi\b|\bfee\b|balance|han muc|limit|so tai khoan|stk)/;
const AMOUNT_LABELS = ["so tien giao dich", "so tien chuyen", "so tien", "tong tien", "tong cong", "amount", "total"];
const NOTE_LABELS = ["noi dung chuyen khoan", "noi dung chuyen tien", "noi dung giao dich", "noi dung", "loi nhan", "dien giai", "content", "message", "description"];
const PARTY_LABELS = ["ten nguoi huong", "ten nguoi thu huong", "nguoi thu huong", "nguoi huong", "ten nguoi nhan", "nguoi nhan", "ten tai khoan nhan", "tai khoan nhan", "chuyen den", "chuyen toi", "beneficiary", "receiver", "recipient"];
const SENDER_LABELS = ["ten nguoi chuyen", "nguoi chuyen", "tu tai khoan", "sender"];

// Số có dấu phân cách hàng nghìn (500.000 / 500,000 / 1 500 000) hoặc số liền >= 4 chữ số,
// có thể kèm đơn vị VND / đ trước hoặc sau.
const AMOUNT_RE = /(vnd\s*)?([+\-−]?)\s*(\d{1,3}(?:[.,  ]\d{3})+|\d{4,})(?:[.,]\d{1,2}(?!\d))?\s*(vnd|dong|d)?(?![a-z0-9])/g;

function amountsIn(line) {
  const out = [];
  for (const m of plain(line).matchAll(AMOUNT_RE)) {
    const value = parseInt(m[3].replace(/\D/g, ""), 10);
    if (!value || value > 1e12) continue;
    out.push({ value, sign: m[2], hasUnit: !!(m[1] || m[4]) });
  }
  return out;
}

// Giá trị của một nhãn: phần sau nhãn trên cùng dòng, hoặc dòng kế tiếp
function field(lines, labels) {
  for (let i = 0; i < lines.length; i++) {
    const pl = plain(lines[i]).trim();
    for (const label of labels) {
      if (!pl.startsWith(label)) continue;
      const rest = lines[i].trim().slice(label.length).replace(/^[\s:：\-–]+/, "").trim();
      if (rest) return rest;
      const next = lines.slice(i + 1).find((l) => l.trim());
      return next ? next.trim() : "";
    }
  }
  return "";
}

function findAmount(lines) {
  // 1) Dòng có nhãn "Số tiền" (số nằm cùng dòng hoặc 1–2 dòng sau)
  for (let i = 0; i < lines.length; i++) {
    const pl = plain(lines[i]);
    if (SKIP_LINE.test(pl) || !AMOUNT_LABELS.some((l) => pl.includes(l))) continue;
    for (const l of lines.slice(i, i + 3)) {
      if (l !== lines[i] && SKIP_LINE.test(plain(l))) break;
      const a = amountsIn(l)[0];
      if (a) return a;
    }
  }
  // 2) Số đầu tiên có đơn vị VND / đ, bỏ qua dòng số dư, phí
  for (const l of lines) {
    if (SKIP_LINE.test(plain(l))) continue;
    const a = amountsIn(l).find((x) => x.hasUnit);
    if (a) return a;
  }
  return null;
}

function findDate(text) {
  const m = text.match(/(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})/);
  if (!m) return "";
  const [d, mo, y] = [+m[1], +m[2], +m[3]];
  if (mo < 1 || mo > 12 || d < 1 || d > 31 || y < 2000) return "";
  return `${y}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

const CATEGORY_HINTS = {
  expense: {
    "Cà phê": /\b(cafe|ca phe|coffee|highlands|phuc long|starbucks|tra sua|katinat|cong caphe|trung nguyen)\b/,
    "Ăn uống": /\b(an sang|an trua|an toi|an vat|com trua|com tam|pho|bun|banh mi|lau|nuong|nha hang|grabfood|shopeefood|baemin|kfc|lotteria|jollibee|pizza)\b/,
    "Đi chợ": /\b(di cho|sieu thi|winmart|bach hoa xanh|coopmart|co\.?op|lotte mart|aeon|go!|mega market|circle k|ministop|7-eleven)\b/,
    "Điện nước": /\b(tien dien|tien nuoc|evn|dien luc|cap nuoc|internet|wifi|cuoc mang|fpt telecom|vnpt|viettel)\b/,
    "Đi lại": /\b(grab|xanh sm|taxi|xang|petrolimex|gui xe|ve xe|vetc|epass|ve may bay|vietjet|vietnam airlines|be group)\b/,
    "Mua sắm": /\b(shopee|lazada|tiki|tiktok shop|sendo|quan ao|giay dep|uniqlo|thegioididong|dien may xanh|fpt shop)\b/,
    "Nhà cửa": /\b(tien nha|thue nha|tien phong|chung cu|phi quan ly)\b/,
    "Sức khỏe": /\b(thuoc|nha thuoc|benh vien|phong kham|kham benh|nha khoa|pharmacity|long chau|an khang)\b/,
    "Con cái": /\b(hoc phi|tien hoc|sua bot|bim|ta giay|do choi)\b/,
    "Giải trí": /\b(cgv|lotte cinema|galaxy|ve phim|netflix|spotify|youtube premium|du lich|khach san|karaoke)\b/,
    "Quà tặng": /\b(qua tang|mung cuoi|dam cuoi|dam hieu|sinh nhat|li xi|mung tho)\b/,
  },
  income: {
    "Lương": /\b(luong|salary|payroll)\b/,
    "Thưởng": /\b(thuong|bonus)\b/,
  },
};

function guessCategory(type, text, categories) {
  const names = new Set((categories?.[type] || []).map(([n]) => n));
  const t = plain(text);
  for (const [cat, re] of Object.entries(CATEGORY_HINTS[type] || {})) {
    if (names.has(cat) && re.test(t)) return cat;
  }
  return "";
}

const titleCase = (s) => s.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase());

export function parseReceipt(raw, categories) {
  const text = String(raw || "").normalize("NFC").replace(/\r/g, "");
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const all = plain(text);

  const amount = findAmount(lines);
  const income = amount?.sign === "+" ||
    /(nhan tien tu|tien vao|ghi co|da nhan duoc|ban nhan duoc|received from|bien dong so du: \+)/.test(all) && amount?.sign !== "-" && amount?.sign !== "−";
  const type = income ? "income" : "expense";

  const content = field(lines, NOTE_LABELS);
  const party = field(lines, income ? SENDER_LABELS : PARTY_LABELS) || field(lines, income ? PARTY_LABELS : SENDER_LABELS);
  let note = content;
  if (!note && party) note = (income ? "Nhận từ " : "CK cho ") + titleCase(party);

  return {
    amount: amount?.value || 0,
    type,
    date: findDate(text),
    note: note.slice(0, 120),
    category: guessCategory(type, `${content} ${party}`, categories),
  };
}
