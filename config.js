// 1) Dán cấu hình Firebase của bạn vào đây (Firebase Console > Project settings > Your apps > Web app)
export const firebaseConfig = {
  apiKey: "DAN_API_KEY_VAO_DAY",
  authDomain: "ten-du-an.firebaseapp.com",
  projectId: "ten-du-an",
  storageBucket: "ten-du-an.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxx",
};

// 2) Tên hiển thị cho 2 người dùng (email phải trùng với tài khoản tạo trong Firebase Auth)
export const USERS = {
  "nguoi1@example.com": "Anh",
  "nguoi2@example.com": "Em",
};

export const CATEGORIES = {
  expense: ["Ăn uống", "Đi chợ", "Nhà cửa", "Điện nước", "Đi lại", "Mua sắm", "Sức khỏe", "Con cái", "Giải trí", "Khác"],
  income: ["Lương", "Thưởng", "Kinh doanh", "Được cho", "Khác"],
};
