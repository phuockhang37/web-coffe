<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2>Đăng nhập</h2>
      <input v-model="username" placeholder="Tên đăng nhập" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <button @click="login">Đăng nhập</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>
<script>
import users from "@/data/users"; // Dữ liệu người dùng
import eventBus from "@/eventBus"; // Để truyền sự kiện nếu cần

export default {
  data() {
    return {
      username: "", // Nhập tên đăng nhập
      password: "", // Nhập mật khẩu
      error: "", // Thông báo lỗi
      users: JSON.parse(localStorage.getItem("users")) || users, // Lấy danh sách người dùng từ localStorage hoặc dữ liệu mẫu
    };
  },
  methods: {
    login() {
      // Tìm người dùng theo username và password
      const user = this.users.find(
        (x) => x.username === this.username && x.password === this.password
      );
      if (user) {
        // Lưu thông tin người dùng hiện tại vào localStorage
        localStorage.setItem("currentuser", JSON.stringify(user));

        // Sử dụng eventBus (nếu cần) để phát tín hiệu đăng nhập thành công
        eventBus.emit("loginSuccess", user);

        // Điều hướng đến trang chủ
        this.$router.push("/");
      } else {
        // Hiển thị lỗi nếu đăng nhập thất bại
        this.error = "Tên đăng nhập hoặc mật khẩu không đúng!";
      }
    },
  },
};
</script>
<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px; /* Thêm khoảng cách quanh container */
}

.auth-box {
  width: 100%;
  max-width: 400px; /* Chiều rộng tối đa cho auth-box */
  padding: 40px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}


h2 {
  margin-bottom: 25px;
  color: #333;
  font-weight: bold;
  font-size: 1.6rem;
}

input {
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

button {
  width: 100%;
  padding: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  
}

.error {
  color: #ff4d4d;
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
}
</style>

