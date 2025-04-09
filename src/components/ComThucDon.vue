<template>
  <div class="menu-container">
    <h1></h1>

    <!-- Danh sách Coffee -->
    <section class="menu-section">
      <h2>Cà Phê</h2>
      <div v-for="item in coffee" :key="item.id" class="menu-item">
        <img :src="item.image" alt="Hình ảnh sản phẩm" class="menu-image" />
        <div class="item-details">
          <p class="item-name">{{ item.name }} - {{ item.price }} VND</p>
          <button :disabled="item.quantity === 0" @click="addToCart(item)" class="btn-add-to-cart">
            Thêm vào giỏ hàng
          </button>
          <span v-if="item.quantity === 0" class="out-of-stock">Hết hàng</span>
        </div>
      </div>
    </section>

    <!-- Danh sách Milk Tea and Tea -->
    <section class="menu-section">
      <h2>Milk Tea & Trà</h2>
      <div v-for="item in drinks" :key="item.id" class="menu-item">
        <img :src="item.image" alt="Hình ảnh sản phẩm" class="menu-image" />
        <div class="item-details">
          <p class="item-name">{{ item.name }} - {{ item.price }} VND</p>
          <button :disabled="item.quantity === 0" @click="addToCart(item)" class="btn-add-to-cart">
            Thêm vào giỏ hàng
          </button>
          <span v-if="item.quantity === 0" class="out-of-stock">Hết hàng</span>
        </div>
      </div>
    </section>

    <!-- Danh sách Bánh Ngọt -->
    <section class="menu-section">
      <h2>Bánh Ngọt</h2>
      <div v-for="item in pastries" :key="item.id" class="menu-item">
        <img :src="item.image" alt="Hình ảnh sản phẩm" class="menu-image" />
        <div class="item-details">
          <p class="item-name">{{ item.name }} - {{ item.price }} VND</p>
          <button :disabled="item.quantity === 0" @click="addToCart(item)" class="btn-add-to-cart">
            Thêm vào giỏ hàng
          </button>
          <span v-if="item.quantity === 0" class="out-of-stock">Hết hàng</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import cart from "../data/cart";

export default {
  name: "ComThucDon",
  data() {
    return {
      coffee: [
      { id: 1, name: "Cà Phê Đen", price: 30000, quantity: 20, image: require("@/assets/food_menu/single_food_4.png") },
          { id: 2, name: "Capuchino", price: 55000, quantity: 20, image: require("@/assets/food_menu/single_food_2.png") },
          { id: 3, name: "Cà Phê Sữa", price: 40000, quantity: 20, image: require("@/assets/food_menu/single_food_3.png") },
          { id: 4, name: "Latte Coffee", price: 50000, quantity: 20, image: require("@/assets/food_menu/single_food_6.png") },
          { id: 17, name: "Cà Phê Trứng", price: 45000, quantity: 20, image: require("@/assets/food_menu/phetrung.png") },
          { id: 18, name: "Sữa Tươi Cà Phê", price: 40000, quantity: 20, image: require("@/assets/food_menu/suacf.png") },
          { id: 19, name: "Coffee Đá Xay", price: 45000, quantity: 20, image: require("@/assets/food_menu/daxay.png") },
      ],
      drinks: [
      { id: 5, name: "Trà Đào Cam Sả", price: 35000, quantity: 20, image: require("@/assets/food_menu/single_food_1.png") },
          { id: 6, name: "Trà Sữa", price: 45000, quantity: 20, image: require("@/assets/food_menu/single_food_5.png") },
          { id: 7, name: "Trà Vải", price: 39000, quantity: 20, image: require("@/assets/food_menu/vai.png") },
          { id: 8, name: "Trà Dâu", price: 40000, quantity: 20, image: require("@/assets/food_menu/tradau.png") },
          { id: 9, name: "Trà Olong", price: 30000, quantity: 20, image: require("@/assets/food_menu/olong.png") },
          { id: 15, name: "Trà Lài Đác Thơm", price: 40000, quantity: 20, image: require("@/assets/food_menu/laidac.png") },
          { id: 16, name: "Trà Lài Mật Ong", price: 35000, quantity: 20, image: require("@/assets/food_menu/matong.png") }
      ],
      pastries: [
      { id: 10, name: "Bánh Mì Bơ Tỏi", price: 25000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/botoi.png") },
          { id: 11, name: "Bánh Socola", price: 40000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/soco.png") },
          { id: 12, name: "Bánh Tiramisu", price: 35000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/tira.png") },
          { id: 13, name: "Bánh Kem Dâu", price: 30000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/kemdau.png") },
          { id: 13, name: "Bánh Su Kem", price: 25000, quantity: 9,type: "bánh ngọt",size: "S", image: require("@/assets/food_menu/su.png") }
      ]
    };
  },
  methods: {
    addToCart(product) {
      const cartItem = cart.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
        product.quantity--;
      } else {
        cart.push({ ...product, quantity: 1 });
        product.quantity--;
      }
    }
  }
};
</script>

<style scoped>
.menu-container {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #8B4513;
  font-size: 36px;
  margin-bottom: 40px;
  font-family: 'Poppins', sans-serif;
}

.menu-section {
  margin-bottom: 40px;
}

h2 {
  font-size: 2rem;
  color: #8B4513;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

.menu-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 15px;
  transition: transform 0.3s ease-in-out;
}

.menu-item:hover {
  transform: translateY(-10px);
}

.menu-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  transition: transform 0.3s ease-in-out;
}

.menu-image:hover {
  transform: scale(1.05);
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item-name {
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
}

button {
  background-color: #8B4513;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 10px;
}

button:disabled {
  background-color: #d3d3d3;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #ffa726;
  transform: scale(1.05);
}

.out-of-stock {
  color: red;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .menu-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .menu-image {
    width: 100%;
    height: 180px;
    margin-right: 0;
    margin-bottom: 15px;
  }

  .item-details {
    width: 100%;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 1.5rem;
  }

  .item-name {
    font-size: 1rem;
  }
}
</style>
