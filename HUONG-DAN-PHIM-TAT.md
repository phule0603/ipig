# Ghi chi tiêu từ biên lai ngân hàng vào iPig

Chuyển khoản xong → chia sẻ biên lai (hoặc chạm 2 lần vào lưng iPhone) → iPig mở ra với
**số tiền, ngày, ghi chú và danh mục đã điền sẵn** → kiểm tra rồi bấm **Lưu**.

Chạy được với mọi ngân hàng, không cần mạng để đọc chữ, không gửi thông tin tài khoản cho ai.

---

## Bước 1 – Tạo phím tắt "Ghi vào iPig" (làm 1 lần, khoảng 5 phút)

Mở app **Phím tắt** (Shortcuts) → tab **Phím tắt** → nút **+** ở góc trên.
Bấm tên ở trên cùng, đổi thành **Ghi vào iPig**.

Thêm lần lượt các tác vụ dưới đây. Ô **Tìm kiếm tác vụ** ở dưới cùng: gõ tên tác vụ (tiếng Việt hoặc tiếng Anh trong ngoặc) rồi bấm vào để thêm.

1. **Nhận đầu vào từ Bảng chia sẻ**
   - Bấm biểu tượng **ⓘ** (dưới cùng) → bật **Hiển thị trong Bảng chia sẻ** (Show in Share Sheet).
   - Ở khối "Nhận ... từ Bảng chia sẻ" vừa hiện ra đầu phím tắt:
     - Bấm chữ **Mọi loại** → chỉ để lại **Hình ảnh** (Images).
     - Dòng **Nếu không có đầu vào** → chọn **Tiếp tục** (Continue).

2. **Nếu** (If)
   - Điều kiện: **Đầu vào phím tắt** · **có bất kỳ giá trị nào** (has any value).

3. Bên trong nhánh **Nếu**, thêm **Đặt biến** (Set Variable): tên biến **Ảnh**, giá trị **Đầu vào phím tắt**.

4. Bên trong nhánh **Ngược lại** (Otherwise):
   - **Lấy ảnh màn hình mới nhất** (Get Latest Screenshots), số lượng **1**.
   - **Đặt biến**: tên biến **Ảnh**, giá trị **Ảnh màn hình mới nhất**.

5. Sau **Kết thúc nếu** (End If), thêm **Trích xuất văn bản từ hình ảnh** (Extract Text from Image) → chọn biến **Ảnh**.

6. **Mã hóa URL** (URL Encode) → đầu vào là **Văn bản** từ bước 5. Để chế độ **Mã hóa** (Encode).

7. **Mở URL** (Open URLs) → gõ đúng địa chỉ sau, rồi chèn biến **Văn bản đã mã hóa URL** ngay sau dấu `=`:

   ```
   https://phule0603.github.io/ipig/#ocr=
   ```

   Kết quả trông như: `https://phule0603.github.io/ipig/#ocr=` `[Văn bản đã mã hóa URL]`

Bấm **Xong**. Phím tắt hoàn chỉnh trông như sau:

```
Nhận Hình ảnh từ Bảng chia sẻ   (không có đầu vào: Tiếp tục)
Nếu Đầu vào phím tắt có bất kỳ giá trị nào
    Đặt biến Ảnh thành Đầu vào phím tắt
Ngược lại
    Lấy 1 ảnh màn hình mới nhất
    Đặt biến Ảnh thành Ảnh màn hình mới nhất
Kết thúc nếu
Trích xuất văn bản từ Ảnh
Mã hóa URL Văn bản
Mở https://phule0603.github.io/ipig/#ocr=[Văn bản đã mã hóa URL]
```

## Bước 2 – Gán vào "chạm 2 lần vào lưng iPhone" (không bắt buộc, rất tiện)

**Cài đặt → Trợ năng → Cảm ứng → Chạm vào mặt sau → Chạm hai lần** → chọn **Ghi vào iPig**.

## Bước 3 – Đăng nhập iPig trong Safari (1 lần)

Phím tắt mở iPig bằng **Safari**, không phải icon trên màn hình chính (iPhone không cho mở thẳng web app).
Safari có bộ nhớ riêng nên lần đầu sẽ phải đăng nhập — Face ID tự điền nếu đã lưu mật khẩu.
Dữ liệu vẫn là một: lưu ở Safari thì mở icon iPig cũng thấy ngay.

---

## Cách dùng hằng ngày

**Cách A – Chia sẻ biên lai**
Chuyển khoản xong, ở màn hình biên lai bấm **Chia sẻ** / **Lưu ảnh** của app ngân hàng →
trong bảng chia sẻ chọn **Ghi vào iPig**.

**Cách B – Chụp màn hình + chạm lưng**
Chụp màn hình biên lai → chạm 2 lần vào lưng iPhone.
(Phím tắt lấy ảnh chụp màn hình mới nhất.)

**Cách C – Không cần phím tắt**
Nhấn giữ vào chữ trên biên lai để chọn và **Sao chép** (hoặc dùng Văn bản trực tiếp trong Ảnh) →
mở iPig → **+** → **📋 Dán chữ từ biên lai ngân hàng**.

iPig tự đọc: số tiền (bỏ qua số dư và phí), thu hay chi, ngày giao dịch, nội dung chuyển khoản
hoặc tên người nhận, và đoán danh mục (ví dụ "Highlands" → Cà phê, "tiền điện" → Điện nước).
**Luôn nhìn lại số tiền trước khi bấm Lưu.**

## Lần đầu chạy

iPhone sẽ hỏi cho phép phím tắt **truy cập Ảnh** và **mở trang phule0603.github.io** → chọn **Luôn cho phép**.

## Gặp lỗi?

| Hiện tượng | Cách xử lý |
|---|---|
| iPig mở ra nhưng không điền số tiền | Ảnh bị mờ hoặc biên lai lạ. Nhập tay, và gửi ảnh biên lai (che số tài khoản) để sửa bộ đọc. |
| Mở trang đăng nhập | Đăng nhập 1 lần trong Safari (xem Bước 3). |
| Không thấy "Ghi vào iPig" trong bảng chia sẻ | Kiểm tra lại mục ⓘ → Hiển thị trong Bảng chia sẻ, và loại đầu vào có **Hình ảnh**. Kéo cuối hàng ứng dụng → **Sửa tác vụ** để thêm vào. |
| Lấy nhầm ảnh cũ khi chạm lưng | Phím tắt luôn lấy ảnh chụp màn hình **mới nhất** — chụp biên lai ngay trước khi chạm. |

Nội dung biên lai chỉ nằm sau dấu `#` trong địa chỉ nên không bị gửi lên máy chủ GitHub;
iPig chỉ lưu những gì bạn bấm Lưu.
