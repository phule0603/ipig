// Cấu hình Firebase của dự án (Firebase Console > Project settings > Your apps > Web app)
export const firebaseConfig = {
  apiKey: "AIzaSyC2Z6z_LVQu-y-UdqXJP1nIie3H2HqIdps",
  authDomain: "ipig-2fbae.firebaseapp.com",
  projectId: "ipig-2fbae",
  storageBucket: "ipig-2fbae.firebasestorage.app",
  messagingSenderId: "696526861842",
  appId: "1:696526861842:web:8a904260ecd1199d818acb",
};

// Tên hiển thị cho 2 người dùng (email phải trùng với tài khoản tạo trong Firebase Auth)
export const USERS = {
  "lephufptu@gmail.com": "Phú",
  "sinhvienlehuyentrang166@gmail.com": "Trang",
};

// Danh mục thu/chi: [tên, biểu tượng]. Đổi tên danh mục cũ thì giao dịch cũ vẫn giữ tên cũ.
export const CATEGORIES = {
  expense: [
    ["Ăn uống", "🍜"], ["Đi chợ", "🛒"], ["Cà phê", "☕"], ["Nhà cửa", "🏠"],
    ["Điện nước", "💡"], ["Đi lại", "🛵"], ["Mua sắm", "🛍️"], ["Sức khỏe", "💊"],
    ["Con cái", "🧸"], ["Giải trí", "🎬"], ["Quà tặng", "🎁"], ["Khác", "📌"],
  ],
  income: [
    ["Lương", "💼"], ["Thưởng", "🏆"], ["Kinh doanh", "📈"], ["Được cho", "🎁"], ["Khác", "📌"],
  ],
};
