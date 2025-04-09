<template>
  <div class="fanpage-intro">
    <div class="fanpage-header">
      <img src="/Images/logo.png" alt="Fanpage Banner" class="fanpage-banner" />
      <h1 class="fanpage-title">Chào mừng đến với Fanpage The Goat Coffee</h1>
      <p class="fanpage-subtitle">Khám phá thế giới cà phê và thức uống tuyệt vời của chúng tôi!</p>
    </div>
    <div class="fanpage-content">
      <h2 class="section-title">Giới Thiệu</h2>
      <p>
        The Goat Coffee là nơi dành cho những ai yêu thích hương vị cà phê đích thực. 
        Chúng tôi mang đến cho bạn những sản phẩm chất lượng, đa dạng và dịch vụ chu đáo.
      </p>
      <h3 class="section-title">Hãy Kết Nối Với Chúng Tôi</h3>
      <p>
        The Goat Coffee luôn sẵn sàng lắng nghe ý kiến của bạn. Đừng quên theo dõi chúng tôi 
        trên các trang mạng xã hội để cập nhật những ưu đãi hấp dẫn!
      </p>
    </div>
    <div class="social-links">
      <a href="https://www.facebook.com/thegoatcafe" target="_blank" class="social-link">
        <i class="fab fa-facebook"></i> Facebook
      </a>
      <a href="https://www.instagram.com/thegoatcafe" target="_blank" class="social-link">
        <i class="fab fa-instagram"></i> Instagram
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComGioiTh",
};
</script>

<style scoped>
/* Tổng quan */
.fanpage-intro {
  text-align: center;
  padding: 50px 20px;
  background-color: #fff8e1;
  color: #5a3826;
  font-family: "Roboto", Arial, sans-serif;
}

/* Header */
.fanpage-header {
  margin-bottom: 30px;
}

.fanpage-banner {
  width: 66%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.fanpage-title {
  font-size: 36px;
  margin-top: 20px;
  font-weight: 700;
  color: #6d4c41;
}

.fanpage-subtitle {
  font-size: 20px;
  margin-top: 10px;
  color: #8b6c5a;
}

/* Nội dung */
.fanpage-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
  line-height: 1.8;
  color: #5a3826;
}

.section-title {
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 15px;
  color: #6d4c41;
  border-bottom: 2px solid #d7b49e;
  display: inline-block;
  padding-bottom: 5px;
}

/* Liên kết mạng xã hội */
.social-links {
  margin-top: 30px;
}

.social-link {
  display: inline-block;
  margin: 0 15px;
  text-decoration: none;
  color: #6d4c41;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #d2691e;
  transform: scale(1.1);
}

.social-link i {
  margin-right: 8px;
  font-size: 24px;
}

/* Đáp ứng (Responsive) */
@media (max-width: 768px) {
  .fanpage-content {
    font-size: 16px;
  }

  .fanpage-title {
    font-size: 28px;
  }

  .social-link {
    font-size: 18px;
  }
}
</style>
