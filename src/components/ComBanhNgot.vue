<template>
    <div class="menu-container">
      <h1>Bánh Ngọt</h1>
      <!-- Danh sách các sản phẩm bánh ngọt -->
      <div v-for="item in pastries" :key="item.id" class="menu-item">
        <img :src="item.image" alt="Hình ảnh sản phẩm" class="menu-image" />
        <div class="menu-details">
          <p>{{ item.name }} - {{ item.price }} VND</p>
          <button :disabled="item.quantity === 0" @click="addToCart(item)">
            Thêm vào giỏ hàng
          </button>
          <span v-if="item.quantity === 0" class="out-of-stock">Hết hàng</span>
        </div>
      </div>
  
      <!-- Giỏ hàng -->
      <div v-if="cart.length > 0" class="cart-container">
        <h2>Giỏ Hàng</h2>
        <ul>
          <li v-for="item in cart" :key="item.id">
            {{ item.name }} - {{ item.quantity }} x {{ item.price }} VND
          </li>
        </ul>
        <p>Tổng cộng: {{ totalPrice }} VND</p>
      </div>
    </div>
  </template>
  
  <script>
   import cart from "../data/cart"; // Import giỏ hàng
  export default {
    data() {
      return {
        pastries: [
          { id: 10, name: "Bánh Mì Bơ Tỏi", price: 25000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/botoi.png") },
          { id: 11, name: "Bánh Socola", price: 40000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/soco.png") },
          { id: 12, name: "Bánh Tiramisu", price: 35000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/tira.png") },
          { id: 13, name: "Bánh Kem Dâu", price: 30000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/kemdau.png") },
          { id: 14, name: "Bánh Su Kem", price: 25000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/su.png") }
        ],
        cart: [] // Giỏ hàng
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
  /* Căn giữa toàn bộ trang */
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
  
  /* Giỏ hàng */
  .cart-container {
    margin-top: 30px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    width: 80%;
    max-width: 400px;
    text-align: left;
  }
  
  .cart-container h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .cart-container ul {
    list-style-type: none;
    padding: 0;
  }
  
  .cart-container li {
    margin-bottom: 10px;
  }
  
  .cart-container p {
    font-weight: bold;
    margin-top: 10px;
  }
  </style>
  