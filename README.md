# Thu Chi – app ghi thu chi cho 2 người (iPhone, miễn phí)

Đây là một **web app (PWA)**: mở bằng Safari rồi "Thêm vào Màn hình chính" là dùng như app thật
(icon riêng, toàn màn hình, không có thanh địa chỉ). Không cần App Store, không cần tài khoản Apple
Developer, không phải cài lại sau 7 ngày.

- Dữ liệu lưu trên **Firebase Firestore** (gói Spark miễn phí, dư sức cho 2 người).
- 2 người đăng nhập bằng email/mật khẩu; ai thêm/sửa/xóa thì máy kia cập nhật ngay lập tức.
- Chỉ 2 email được khai báo mới đọc/ghi được dữ liệu (chặn bằng Firestore Rules).
- Vẫn xem được khi mất mạng; khoản nhập lúc offline sẽ tự đồng bộ khi có mạng lại.

## Bước 1 – Tạo Firebase (khoảng 10 phút)

1. Vào https://console.firebase.google.com → **Add project** (tắt Google Analytics cũng được).
2. **Build > Authentication > Get started > Email/Password** → bật **Enable**.
3. Tab **Users > Add user**: tạo 2 tài khoản (email + mật khẩu) cho 2 người.
4. **Build > Firestore Database > Create database** → chọn vùng `asia-southeast1` (Singapore) → *production mode*.
5. Tab **Rules** của Firestore: dán nội dung file `firestore.rules`, **sửa 2 email** cho đúng, bấm **Publish**.
6. **Project settings (bánh răng) > General > Your apps > biểu tượng `</>`** để tạo Web app → copy đoạn `firebaseConfig`.

## Bước 2 – Sửa `config.js`

- Dán `firebaseConfig` vừa copy.
- Sửa `USERS` thành 2 email ở bước 1.3 và tên hiển thị.
- Danh mục thu/chi tùy chỉnh trong `CATEGORIES`.

> `apiKey` của Firebase web không phải bí mật, để công khai không sao — bảo mật nằm ở Rules + mật khẩu.

## Bước 3 – Đưa lên mạng miễn phí (chọn 1 cách)

**GitHub Pages**
1. Tạo repo mới trên GitHub, upload toàn bộ file trong thư mục này.
2. Repo > **Settings > Pages** > Source: `main` / `root` → Save.
3. Sau 1–2 phút có link dạng `https://<tên>.github.io/<repo>/`.

**Hoặc Netlify Drop**: vào https://app.netlify.com/drop, kéo thả cả thư mục vào là có link.

(Cuối cùng vào Firebase **Authentication > Settings > Authorized domains** thêm tên miền đó nếu đăng nhập báo lỗi.)

## Bước 4 – Cài lên iPhone (cả 2 người)

1. Mở link bằng **Safari**.
2. Bấm nút **Chia sẻ** → **Thêm vào MH chính** → **Thêm**.
3. Mở app từ icon, đăng nhập. Xong!

## Cách dùng

- **Sổ**: tổng thu / chi / còn lại của tháng, danh sách theo ngày. Tìm kiếm theo ghi chú (gõ không dấu cũng được),
  lọc theo người hoặc chỉ thu / chỉ chi. Bấm vào 1 dòng để sửa hoặc xóa.
- **+**: nhập số tiền (nút `+000`, 20k, 50k… để nhập nhanh), chọn danh mục bằng biểu tượng, chọn Hôm nay / Hôm qua.
- **Thống kê**: tổng chi so với tháng trước, trung bình mỗi ngày, chi theo danh mục, mỗi người thu/chi bao nhiêu,
  biểu đồ 6 tháng (bấm vào cột để xem số).
- Đổi tháng: mũi tên ‹ ›, vuốt ngang, hoặc bấm tên tháng để về tháng hiện tại.
- Bấm avatar góc phải: xuất dữ liệu ra file CSV (mở bằng Excel / Numbers / Google Sheets), đăng xuất.
- Mở được cả khi mất mạng; khoản nhập lúc offline tự đồng bộ khi có mạng.
- Danh mục và biểu tượng sửa trong `config.js`.

## Chạy thử trên máy tính

```bash
python3 -m http.server 8000   # rồi mở http://localhost:8000
```
