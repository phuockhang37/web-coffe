<template>
    <header>
      <div class="container">
        <div class="logo">
          <img src="/Images/logo.png" alt="Coffee TheGoat">
        </div>
        <nav>
          <ul>
            <li><router-link to="/" class="nav-link" active-class="active-link">Trang Chủ</router-link></li>
            <li><router-link to="/thucdon" class="nav-link" active-class="active-link">Thực Đơn</router-link></li>
            <li><router-link to="/gioithieu" class="nav-link" active-class="active-link">Giới Thiệu</router-link></li>
            <li><router-link to="/lienhe" class="nav-link" active-class="active-link">Liên Hệ</router-link></li>
            <li><router-link to="/tintuc" class="nav-link" active-class="active-link">Tin Tức</router-link></li>
            <li><router-link to="/register" class="nav-link" active-class="active-link">Đăng Ký</router-link></li>
            <li><router-link to="/login" class="nav-link" active-class="active-link">Đăng Nhập</router-link></li>
          </ul>
        </nav>
        <div v-if="user">
          <p>Xin chào, {{ user.username }}</p>
          <button @click="logout">Đăng xuất</button>
        </div>
        <div class="cta">
          <router-link to="/cart" class="cta-button">Giỏ Hàng</router-link>
        </div>
      </div>
    </header>
    <router-view/>
  </template>
  
  <script>
  import eventBus from '@/eventBus'
  export default {
      data() {
          return {
              user: JSON.parse(localStorage.getItem('currentuser')) || null
          }
      },
      created() {
          eventBus.on('loginSuccess', (user) => {
              this.user = user
          })
      },
      beforeUnmount() {
          eventBus.off('loginSuccess')
      },
      methods: {
          logout() {
              localStorage.removeItem('currentuser')
              this.user = null
              this.$router.push('/')
          }
      }
  }
  </script>
  
  <style>
  .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: #ddd4d4;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo img {
      height: 180px;
      transition: transform 0.3s ease;
  }
  
  nav ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: center; /* Căn giữa các liên kết */
  }
  
  nav ul li {
      margin: 0 20px; /* Tăng khoảng cách giữa các liên kết */
  }
  
  nav ul li a {
      text-decoration: none;
      color: #8B4513; /* Màu nâu */
      font-weight: bold;
      font-size: 20px; /* Tăng kích thước chữ */
      transition: color 0.3s ease, border-bottom 0.3s ease; /* Thêm hiệu ứng khi hover */
      position: relative;
  }
  
  /* Hiệu ứng hover: thêm gạch dưới khi di chuột */
  nav ul li a:hover {
      color: #A52A2A; /* Màu nâu đậm hơn khi hover */
      border-bottom: 3px solid #A52A2A; /* Gạch dưới khi hover */
      padding-bottom: 5px; /* Khoảng cách thêm dưới chữ để hiển thị gạch dưới */
  }
  
  /* Hiệu ứng cho mục đang được chọn (active) */
  nav ul li a.active-link {
      color: #A52A2A; /* Màu nâu đậm cho mục được chọn */
      border-bottom: 3px solid #A52A2A; /* Gạch dưới mục đang được chọn */
      padding-bottom: 5px; /* Khoảng cách dưới chữ */
  }
  
  .cta-button {
      padding: 20px 30px;
      background-color: #fcb034;
      color: #fff;
      text-decoration: none;
      border-radius: 25px;
      transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .cta-button:hover {
      background-color: #ffa726;
      transform: scale(1.1);
  }
  
  /* Tăng kích thước chữ trong phần chào mừng người dùng */
  .cta {
      font-size: 18px;
      color: #8B4513;
  }
  
  .cta button {
      margin-left: 10px;
      background-color: #fcb034;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
  }
  
  .cta button:hover {
      background-color: #ffa726;
  }
  </style>
  