<template>
    <div class="menu-container">
      <h1>Cà Phê</h1>
      <!-- Danh sách các sản phẩm cà phê -->
      <div v-for="item in coffeeItems" :key="item.id" class="menu-item">
        <img :src="item.image" alt="Hình ảnh sản phẩm" class="menu-image" />
        <div class="menu-details">
          <p>{{ item.name }} - {{ item.price }} VND</p>
          <button :disabled="item.quantity === 0" @click="addToCart(item)">
            Thêm vào giỏ hàng
          </button>
          <span v-if="item.quantity === 0" class="out-of-stock">Hết hàng</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import cart from "../data/cart"; // Import giỏ hàng
  
  export default {
    data() {
      return {
        coffeeItems: [
          { id: 1, name: "Cà Phê Đen", price: 30000, quantity: 20, image: require("@/assets/food_menu/single_food_4.png") },
          { id: 2, name: "Capuchino", price: 55000, quantity: 20, image: require("@/assets/food_menu/single_food_2.png") },
          { id: 3, name: "Cà Phê Sữa", price: 40000, quantity: 20, image: require("@/assets/food_menu/single_food_3.png") },
          { id: 4, name: "Latte Coffee", price: 50000, quantity: 20, image: require("@/assets/food_menu/single_food_6.png") },
          { id: 17, name: "Cà Phê Trứng", price: 45000, quantity: 20, image: require("@/assets/food_menu/phetrung.png") },
          { id: 18, name: "Sữa Tươi Cà Phê", price: 40000, quantity: 20, image: require("@/assets/food_menu/suacf.png") },
          { id: 19, name: "Coffee Đá Xay", price: 45000, quantity: 20, image: require("@/assets/food_menu/daxay.png") },
        ]
      };
    },
    methods: {
      addToCart(product) {
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
  
        if (product.quantity > 0) {
          product.quantity--;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Container chính giữa toàn bộ trang */
  .menu-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Căn giữa nội dung theo chiều ngang */
    justify-content: center; /* Căn giữa theo chiều dọc */
    text-align: center; /* Căn giữa text */
    margin-top: 20px;
  }
  
  /* Tiêu đề */
  h1 {
    color: #8B4513;
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  /* Căn giữa từng sản phẩm */
  .menu-item {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    gap: 15px;
    justify-content: center; /* Căn giữa sản phẩm */
  }
  
  /* Hình ảnh sản phẩm */
  .menu-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  /* Chi tiết sản phẩm (Tên, giá và nút) */
  .menu-details {
    display: flex;
    flex-direction: column;
    align-items: center; /* Căn giữa nội dung trong mỗi mục */
  }
  
  /* Nút Thêm vào giỏ hàng */
  button {
    padding: 5px 10px;
    margin-top: 10px;
    background-color: #8B4513;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  
  /* Thông báo hết hàng */
  .out-of-stock {
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }
  </style>
  