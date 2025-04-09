<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2 v-if="isRegistering">Đăng ký tài khoản</h2>
      <h2 v-else>Đăng nhập</h2>

      <input v-model="username" placeholder="Tên đăng nhập" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <input
        v-if="isRegistering"
        v-model="confirmPassword"
        type="password"
        placeholder="Xác nhận mật khẩu"
      />

      <button @click="isRegistering ? register() : login()">
        {{ isRegistering ? 'Đăng ký' : 'Đăng nhập' }}
      </button>
      <p v-if="error" class="error">{{ error }}</p>

      <p class="toggle-text">
        {{ isRegistering ? 'Đã có tài khoản?' : 'Chưa có tài khoản?' }}
        <span @click="toggleMode">
          {{ isRegistering ? 'Đăng nhập ngay' : 'Đăng ký ngay' }}
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      error: "",
      isRegistering: true, // true: đăng ký, false: đăng nhập
      users: JSON.parse(localStorage.getItem("users")) || [],
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        this.error = "Mật khẩu không trùng khớp!";
        return;
      }
      const existingUser = this.users.find(
        (user) => user.username === this.username
      );
      if (existingUser) {
        this.error = "Tên đăng nhập đã tồn tại!";
        return;
      }
      const newUser = {
        id: this.users.length + 1,
        username: this.username,
        password: this.password,
      };
      this.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(this.users));
      alert("Đăng ký thành công! Hãy đăng nhập.");
      this.resetForm();
      this.isRegistering = false; // Chuyển sang chế độ đăng nhập
      this.$router.push("/login"); // Chuyển hướng đến trang đăng nhập
    },
    login() {
      const user = this.users.find(
        (user) =>
          user.username === this.username && user.password === this.password
      );
      if (user) {
        alert("Đăng nhập thành công!");
        this.$router.push("/home"); // Chuyển hướng đến trang chủ
      } else {
        this.error = "Sai tên đăng nhập hoặc mật khẩu!";
      }
    },
    toggleMode() {
      this.isRegistering = !this.isRegistering;
      this.resetForm();
    },
    resetForm() {
      this.username = "";
      this.password = "";
      this.confirmPassword = "";
      this.error = "";
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
  padding: 20px; /* Thêm padding cho container */
}

.auth-box {
  width: 100%;
  max-width: 400px; /* Giới hạn chiều rộng của auth-box */
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
  transform: scale(1.05); /* Thêm hiệu ứng zoom khi hover */
}

.error {
  color: #ff4d4d;
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
}

.toggle-text {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}

.toggle-text span {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}
</style>
