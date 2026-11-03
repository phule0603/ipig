# Ghi chi tiêu từ biên lai ngân hàng vào iPig

Đang xem chi tiết giao dịch → bấm nút phím tắt (Trung tâm điều khiển / Nút tác vụ / AssistiveTouch) → iPig mở ra với
**số tiền, ngày, ghi chú và danh mục đã điền sẵn** → kiểm tra rồi bấm **Lưu**.

Chạy được với mọi ngân hàng, không cần mạng để đọc chữ, không gửi thông tin tài khoản cho ai.

---

## Bước 1 – Tạo phím tắt "Ghi vào iPig" (làm 1 lần, khoảng 3 phút)

Phím tắt tự **chụp màn hình đang mở** (không lưu ảnh vào thư viện), đọc chữ rồi mở iPig.
Bạn chỉ cần đang ở màn hình chi tiết giao dịch trong app ngân hàng và bấm chạy phím tắt.

Mở app **Phím tắt** (Shortcuts) → **+** → đặt tên **Ghi vào iPig**, rồi thêm lần lượt
(ô **Tìm kiếm tác vụ** ở dưới cùng, gõ tên tiếng Việt hoặc tiếng Anh trong ngoặc):

1. **Chờ** (Wait) → **1** giây. *(để nút bấm / Trung tâm điều khiển kịp ẩn đi)*
2. **Chụp ảnh màn hình** (Take Screenshot).
3. **Trích xuất văn bản từ hình ảnh** (Extract Text from Image) → đầu vào **Ảnh màn hình**.
4. **Mã hóa URL** (URL Encode) → chế độ **Mã hóa**, đầu vào **Văn bản** của bước 3.
5. **Văn bản** (Text) → gõ `https://phule0603.github.io/ipig/#ocr=` rồi chèn ngay sau dấu `=`
   biến **Văn bản đã mã hóa URL** (viên màu xanh).
6. **Mở URL** (Open URLs) → chèn biến **Văn bản** của bước 5.

```
Chờ 1 giây
Chụp ảnh màn hình
Trích xuất văn bản từ [Ảnh màn hình]
Mã hóa URL [Văn bản]
Văn bản: https://phule0603.github.io/ipig/#ocr=[Văn bản đã mã hóa URL]
Mở URL [Văn bản]
```

## Bước 2 – Chọn cách bấm chạy phím tắt (chọn 1)

| Cách | Cài đặt | Khi dùng |
|---|---|---|
| **Trung tâm điều khiển** (iOS 18 trở lên) | Vuốt mở Trung tâm điều khiển → giữ chỗ trống → **Thêm điều khiển** → **Phím tắt** → chọn **Ghi vào iPig** | Đang ở chi tiết giao dịch: vuốt xuống từ góc phải → bấm nút |
| **Nút tác vụ** (iPhone 15 Pro trở lên) | **Cài đặt → Nút Tác vụ** → **Phím tắt** → **Ghi vào iPig** | Bấm nút cạnh trái |
| **Nút AssistiveTouch** (mọi iPhone) | **Cài đặt → Trợ năng → Cảm ứng → AssistiveTouch** → bật → **Chạm một lần** → **Ghi vào iPig** | Bấm nút tròn nổi trên màn hình |
| **Siri** | Không cần cài | Nói "Hey Siri, Ghi vào iPig" |

Cách khác không cần màn hình: ở biên lai bấm nút **Chia sẻ** của app ngân hàng → chọn **Ghi vào iPig**
(cần bật **ⓘ → Hiển thị trong Bảng chia sẻ** và đổi bước 2 thành dùng **Đầu vào phím tắt** khi có).

## Bước 3 – Đăng nhập iPig trong Safari (1 lần)

Phím tắt mở iPig bằng **Safari**, không phải icon trên màn hình chính (iPhone không cho mở thẳng web app).
Safari có bộ nhớ riêng nên lần đầu sẽ phải đăng nhập — Face ID tự điền nếu đã lưu mật khẩu.
Dữ liệu vẫn là một: lưu ở Safari thì mở icon iPig cũng thấy ngay.

---

## Cách dùng hằng ngày

**Cách A – Chia sẻ biên lai**
Chuyển khoản xong, ở màn hình biên lai bấm **Chia sẻ** / **Lưu ảnh** của app ngân hàng →
trong bảng chia sẻ chọn **Ghi vào iPig**.

**Cách B – Bấm phím tắt khi đang xem chi tiết giao dịch**
Mở chi tiết giao dịch trong app ngân hàng → bấm nút đã cài ở Bước 2. Không cần tự chụp màn hình.

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
| Chữ đọc được là của Trung tâm điều khiển / Siri | Tăng bước **Chờ** lên 2 giây. |

Nội dung biên lai chỉ nằm sau dấu `#` trong địa chỉ nên không bị gửi lên máy chủ GitHub;
iPig chỉ lưu những gì bạn bấm Lưu.
