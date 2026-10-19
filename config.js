// 1) Dán cấu hình Firebase của bạn vào đây (Firebase Console > Project settings > Your apps > Web app)
export const firebaseConfig = {
  apiKey: "AIzaSyC2Z6z_LVQu-y-UdqXJP1nIie3H2HqIdps",
  authDomain: "ipig-2fbae.firebaseapp.com",
  projectId: "ipig-2fbae",
  storageBucket: "ipig-2fbae.firebasestorage.app",
  messagingSenderId: "696526861842",
  appId: "1:696526861842:web:8a904260ecd1199d818acb",
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
