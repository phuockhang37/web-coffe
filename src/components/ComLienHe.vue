<template>
  <div class="contact-page">
    <h1>Liên Hệ Với Chúng Tôi</h1>
    <p>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông tin và tin nhắn của bạn, chúng tôi sẽ phản hồi bạn sớm nhất có thể.</p>

    <!-- Form Liên Hệ -->
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Tên của bạn</label>
        <input type="text" id="name" v-model="name" placeholder="Nhập tên của bạn" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Nhập email của bạn" required />
      </div>

      <div class="form-group">
        <label for="message">Tin nhắn</label>
        <textarea id="message" v-model="message" placeholder="Nhập tin nhắn của bạn" required></textarea>
      </div>

      <button type="submit" class="submit-btn">Gửi</button>
    </form>

    <!-- Thông tin liên hệ khác -->
    <div class="contact-info">
      <h3>Thông tin liên hệ</h3>
      <p>Email: support@thegoatcafe.com</p>
      <p>Số điện thoại: +84 123 456 789</p>

      <div class="social-links">
        <a href="https://www.facebook.com/thegoatcafe" target="_blank" class="social-link">Facebook</a>
        <a href="https://www.instagram.com/thegoatcafe" target="_blank" class="social-link">Instagram</a>
      </div>
    </div>

    <!-- Phản hồi người dùng -->
    <div v-if="feedbacks.length > 0" class="feedback-section">
      <h3>Phản hồi của người dùng</h3>
      <ul>
        <li v-for="(feedback, index) in feedbacks" :key="index" class="feedback-item">
          <strong>{{ feedback.name }} ({{ feedback.email }})</strong>
          <p>{{ feedback.message }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComLienHe',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      feedbacks: [] // Lưu trữ các phản hồi từ người dùng
    };
  },
  methods: {
    submitForm() {
      // Lưu phản hồi người dùng vào mảng feedbacks
      const newFeedback = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      this.feedbacks.push(newFeedback);

      // Reset form sau khi gửi
      this.name = '';
      this.email = '';
      this.message = '';

      // Thông báo gửi thành công
      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
    }
  }
};
</script>

<style scoped>
.contact-page {
  text-align: center;
  padding: 40px;
  background-color: #fff8e1;
  color: #5a3826;
  font-family: "Roboto", Arial, sans-serif;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #6d4c41;
}

p {
  font-size: 18px;
  color: #8b6c5a;
  margin-bottom: 30px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  color: #6d4c41;
}

input, textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  background-color: #6d4c41;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.submit-btn:hover {
  background-color: #8b6c5a;
}

.contact-info {
  margin-top: 40px;
  font-size: 18px;
}

.contact-info h3 {
  font-size: 24px;
  color: #6d4c41;
  margin-bottom: 20px;
}

.social-links {
  margin-top: 20px;
}

.social-link {
  margin: 0 10px;
  text-decoration: none;
  color: #6d4c41;
  font-weight: bold;
  font-size: 20px;
}

.social-link:hover {
  color: #d2691e;
}

.feedback-section {
  margin-top: 50px;
  font-size: 18px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.feedback-section h3 {
  font-size: 24px;
  color: #6d4c41;
  margin-bottom: 20px;
}

.feedback-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.feedback-item p {
  font-size: 16px;
  color: #8b6c5a;
}
</style>
