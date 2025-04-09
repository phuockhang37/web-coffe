<template>
    <main class="menu-container">
      <div class="menu">
        <h2 class="menu-title">Drinks</h2>
        <div class="menu-carousel">
          <div class="menu-item">
            <img :src="product.image" alt="Product Image" class="product-image" />
            <div class="menu-item-info">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <p>{{ product.price }} VND</p>
            </div>
          </div>
          <div class="add-to-cart-container">
            <button 
              :disabled="product.quality === 0" 
              @click="addToCart(product)" 
              class="add-to-cart-btn"
            >
              {{ product.quality > 0 ? 'Thêm vào giỏ hàng' : 'hết hàng' }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import items from "../data/items";
  import cart from "../data/cart";
  
  export default {
    name: "MenuPage",
    data() {
      return {
        product: {}, // Sản phẩm hiện tại
        cart: cart,  // Giỏ hàng
      };
    },
    mounted() {
      const id = this.$route.params.id; // Lấy ID sản phẩm từ URL
      this.product = items.find((item) => item.id == id); // Tìm sản phẩm tương ứng
    },
    methods: {
      addToCart(product) {
        if (product.quality > 0) { // Chỉ thêm vào giỏ khi còn hàng
          const existingProduct = this.cart.find((item) => item.id === product.id);
          if (existingProduct) {
            existingProduct.quantity += 1;
          } else {
            this.cart.push({ ...product, quantity: 1 });
          }
          product.quality--; // Giảm số lượng hàng trong kho
          alert(`${product.name} đã được thêm vào giỏ hàng!`); // Thông báo thêm vào giỏ
        } else {
          alert("Rất tiếc, sản phẩm này đã hết hàng.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
 .menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
}

.menu {
  text-align: center;
  max-width: 800px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.menu-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.menu-carousel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.menu-item {
  position: relative;
  width: 100%;
  max-width: 350px; /* Tăng chiều rộng của item */
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 250px; /* Tăng chiều cao của hình ảnh */
  object-fit: cover;
  transition: transform 0.3s ease;
}

.menu-item:hover .product-image {
  transform: scale(1.2); /* Phóng to hình ảnh khi hover */
}

.menu-item-info {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: left;
}

.add-to-cart-container {
  margin-top: 10px;
  width: 100%;
  max-width: 350px; /* Đảm bảo button "Add to Cart" cũng rộng bằng với sản phẩm */
  text-align: center;
}

.add-to-cart-btn {
  padding: 10px 20px;
  background-color: #495c71;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.add-to-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.add-to-cart-btn:hover:not(:disabled) {
  background-color: #0056b3;
}

  </style>
  