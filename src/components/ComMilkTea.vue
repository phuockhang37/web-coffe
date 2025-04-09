<template>
    <div class="menu-container">
      <h1>Milk Tea and Tea</h1>
      <!-- Danh sách sản phẩm Milk Tea -->
      <div v-for="item in drinks" :key="item.id" class="menu-item">
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
        <h2>Giỏ hàng</h2>
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
        drinks: [
          { id: 5, name: "Trà Đào Cam Sả", price: 35000, quantity: 20, image: require("@/assets/food_menu/single_food_1.png") },
          { id: 6, name: "Trà Sữa", price: 45000, quantity: 20, image: require("@/assets/food_menu/single_food_5.png") },
          { id: 7, name: "Trà Vải", price: 39000, quantity: 20, image: require("@/assets/food_menu/vai.png") },
          { id: 8, name: "Trà Dâu", price: 40000, quantity: 20, image: require("@/assets/food_menu/tradau.png") },
          { id: 9, name: "Trà Olong", price: 30000, quantity: 20, image: require("@/assets/food_menu/olong.png") },
          { id: 15, name: "Trà Lài Đác Thơm", price: 40000, quantity: 20, image: require("@/assets/food_menu/laidac.png") },
          { id: 16, name: "Trà Lài Mật Ong", price: 35000, quantity: 20, image: require("@/assets/food_menu/matong.png") }
        ],
        cart: [], // Giỏ hàng
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
    align-items: center;
    justify-content: center;
    text-align: center;
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
    justify-content: center;
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
    align-items: center;
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
  