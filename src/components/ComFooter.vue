<template>
    <footer>
      <div class="footer-container">
        <div class="footer-column">
          <h3>Liên lạc với chúng tôi</h3>
          <p><i class="fas fa-envelope"></i> Thegoatcf@gmail.com</p>
        </div>
        <div class="footer-column">
          <h3>Thực Đơn</h3>
          <ul>
            <!-- Sử dụng router-link để điều hướng -->
            <li><router-link to="/coffee">Coffee</router-link></li>
            <li><router-link to="/milk-tea">Milk Tea and Tea</router-link></li>
            <li><router-link to="/BanhNgot">Bánh Ngọt</router-link></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Liên hệ</h3>
          <p><i class="fas fa-map-marker-alt"></i> Địa chỉ: Thanh Pho Ho Chi Minh</p>
          <p><i class="fas fa-phone-alt"></i> Điện thoại: 0123-456-789</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  footer {
    background-color: #f5f5f5;
    color: #3b3b3b;
    padding: 40px 20px;
    font-family: Arial, sans-serif;
    border-top: 3px solid #8B4513;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-column {
    flex: 1;
    padding: 15px;
    min-width: 220px;
    box-sizing: border-box;
    border-left: 1px solid #ddd;
  }
  
  .footer-column h3 {
    margin-bottom: 15px;
    font-size: 1.2rem;
    color: #8B4513;
    font-weight: bold;
  }
  
  .footer-column p,
  .footer-column a {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }
  
  .footer-column a {
    text-decoration: none;
  }
  
  .footer-column a:hover {
    color: #8B4513;
    text-decoration: underline;
  }
  
  .footer-column i {
    margin-right: 8px;
    color: #8B4513;
  }
  
  .footer-column ul {
    padding: 0;
    list-style: none;
  }
  
  .footer-column ul li {
    margin: 10px 0;
  }
  </style>
  