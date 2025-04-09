<template>
  <div class="news-page">
    <div class="news-header">
      <h1>Chào mừng đến với Tin Tức The Goat Coffee</h1>
      <p>Khám phá những tin tức mới nhất về cà phê, sự kiện và các chương trình khuyến mãi hấp dẫn.</p>
    </div>
    <div class="news-content">
      <p>Đây là trang tin tức nơi bạn có thể tìm thấy thông tin mới nhất từ The Goat Coffee. Hãy theo dõi để không bỏ lỡ bất kỳ tin tức quan trọng nào!</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ComTinTuc',
}
</script>

<style scoped>
.news-page {
  padding: 30px;
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
}

.news-header {
  text-align: center;
  margin-bottom: 30px;
}

.news-header h1 {
  font-size: 36px;
  color: #8B4513;
  margin-bottom: 10px;
}

.news-header p {
  font-size: 18px;
  color: #A0522D;
  margin-bottom: 20px;
}

.news-content {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-content p {
  font-size: 20px;
  color: #333;
  line-height: 1.6;
}
</style>
