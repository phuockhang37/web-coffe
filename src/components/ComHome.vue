<template>
  <div class="home-container">
    <h1 class="title">Chào mừng đến với The Goat Coffee</h1>
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="Tìm kiếm sản phẩm..." 
      class="search-bar" 
    />

    <h2 class="subtitle"></h2>
    <div class="products-container">
      <!-- Lọc và hiển thị sản phẩm theo tìm kiếm -->
      <div 
        v-for="item in filteredProducts" 
        :key="item.id" 
        class="product-card"
      >
        <img :src="item.image" alt="product-image" class="product-image" />
        <div class="product-details">
          <h3 class="product-title">{{ item.name }}</h3>
          <p class="product-price">{{ item.price }} VND</p>
          <button @click="addToCart(item)" class="btn-add-to-cart">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import items from '../data/items';
import cart from "../data/cart"; 

export default {
  name: 'ComHome',
  data() {
    return {
      products: items, // Danh sách sản phẩm
      cart: [],        // Giỏ hàng
      searchQuery: ""  // Nội dung tìm kiếm
    };
  },
  computed: {
    // Lọc sản phẩm theo nội dung tìm kiếm
    filteredProducts() {
      return this.products.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
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
/* CSS cập nhật */
.home-container {
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f7f1;
  color: #333;
  font-family: 'Poppins', sans-serif;
}

.title {
  font-size: 36px;
  font-weight: bold;
  color: #6b4226;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 24px;
  color: #8b4513;
  margin: 20px 0;
}

.search-bar {
  padding: 10px 15px;
  width: 80%;
  max-width: 500px;
  font-size: 16px;
  border: 2px solid #8b4513;
  border-radius: 25px;
  margin-bottom: 30px;
  transition: border-color 0.3s;
}

.search-bar:focus {
  border-color: #d2691e;
  outline: none;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 20px;
}

.product-card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-details {
  padding: 20px;
}

.product-title {
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin: 10px 0;
}

.product-price {
  font-size: 16px;
  color: #8b4513;
  font-weight: bold;
  margin-bottom: 15px;
}

.btn-add-to-cart {
  padding: 10px 20px;
  background-color: #d2691e;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-add-to-cart:hover {
  background-color: #b55a1d;
}

@media screen and (max-width: 768px) {
  .products-container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 28px;
  }

  .product-title {
    font-size: 16px;
  }

  .product-price {
    font-size: 14px;
  }
}
</style>
