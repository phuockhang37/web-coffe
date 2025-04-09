<template>
  <div>
    <div v-if="cart.length === 0">
      <p>Giỏ hàng chưa có món!</p>
    </div>

    <div v-else class="modal-content">
      <table class="text-center table">
        <tr>
          <th>HÌNH</th>
          <th>SẢN PHẨM</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Size</th>
          <th>Tiền</th>
          <th></th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td><img :src="item.image" style="height: 100px; width: 100px" /></td>
          <td class="align-middle">{{ item.name }}</td>
          <td class="align-middle">{{ item.price }} VND</td>
          <td class="align-middle">
            <input
              type="number"
              v-model.number="item.quantity"
              @input="validateQuantity(item)"
              @change="updateQuantity(item)"
              min="1"
              :max="getMaxQuantity(item)"
              style="width: 50px; text-align: center;"
            />
          </td>
          <td class="align-middle">
            <span v-if="item.type === 'bánh ngọt'">S</span>
            <select v-else v-model="item.size" @change="updateSize(item)">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </td>
          <td class="align-middle">{{ calculateTotalPrice(item) }} VND</td>
          <td class="align-middle">
            <button class="btn btn-danger" @click="deleteProduct(item)">Xóa</button>
          </td>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>Tổng tiền</th>
          <th>{{ totalQuantity }}</th>
          <th>{{ totalAmount }} VND</th>
          <th><button class="btn btn-danger" @click="clearCart()">Xóa hết</button></th>
        </tr>
      </table>

      <button class="btn btn-success large-button" @click="checkSizeBeforePayment">
        Thanh toán
      </button>
    </div>

    <div v-if="showPaymentDialog" class="payment-dialog">
      <p class="dialog-text">
        Bạn có muốn thanh toán với tổng số tiền là {{ totalAmount }} VND?
      </p>
      <button class="btn btn-primary large-button" @click="confirmPayment">
        Đồng ý
      </button>
      <button class="btn btn-secondary large-button" @click="cancelPayment">
        Hủy bỏ
      </button>
    </div>

    <div v-if="sizeError" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import items from "../data/items"; // Dữ liệu danh sách sản phẩm có sẵn
import cart from "../data/cart"; // Dữ liệu giỏ hàng

export default {
  data() {
    return {
      cart: cart,
      showPaymentDialog: false,
      sizeError: false,
      errorMessage: "",
    };
  },
  computed: {
    totalAmount() {
      return this.cart.reduce((total, item) => total + this.calculateTotalPrice(item), 0);
    },
    totalQuantity() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    validateQuantity(item) {
      // Kiểm tra số lượng nhập vào không vượt quá 0 và là một số hợp lệ
      if (item.quantity < 1 || isNaN(item.quantity)) {
        item.quantity = 1;
      }
    },
    updateQuantity(item) {
      // Cập nhật số lượng sản phẩm trong giỏ hàng
      const product = items.find((i) => i.id === item.id);
      if (product) {
        const maxQuantity = product.quantity; // Giới hạn số lượng theo kho
        if (item.quantity > maxQuantity) {
          item.quantity = maxQuantity; // Không cho phép vượt quá số lượng trong kho
          alert("Không đủ hàng trong kho.");
        }
      }
    },
    getMaxQuantity(item) {
      const product = items.find((i) => i.id === item.id);
      return product ? product.quantity : 0; // Lấy số lượng tối đa có sẵn trong kho
    },
    deleteProduct(item) {
      // Xóa sản phẩm khỏi giỏ hàng
      this.cart = this.cart.filter((x) => x.id !== item.id);
    },
    clearCart() {
      // Xóa hết sản phẩm trong giỏ hàng
      this.cart = [];
    },
    confirmPayment() {
      alert(`Thanh toán thành công! Tổng số tiền là ${this.totalAmount} VND.`);
      this.clearCart();
      this.showPaymentDialog = false;
    },
    cancelPayment() {
      this.showPaymentDialog = false;
    },
    updateSize(item) {
      console.log("Size updated:", item.size);
    },
    calculateTotalPrice(item) {
      let price = item.price;
      // Thêm phụ phí cho các size đặc biệt
      if (item.size === "M") {
        price += 4000;
      } else if (item.size === "L") {
        price += 7000;
      }
      return price * item.quantity; // Tính tổng tiền theo số lượng
    },
    checkSizeBeforePayment() {
  // Kiểm tra các sản phẩm chưa chọn size
  const missingSizeItems = this.cart.filter(
    (item) => (item.type === "coffee" || item.type === "milktea") && !item.size
  );

  if (missingSizeItems.length > 0) {
    // Hiển thị thông báo lỗi nếu sản phẩm thiếu size
    const productNames = missingSizeItems.map((item) => item.name).join(", ");
    this.errorMessage = `Vui lòng chọn size cho sản phẩm: ${productNames}`;
    this.sizeError = true; // Hiển thị thông báo lỗi
  } else {
    // Nếu không có sản phẩm thiếu size, cho phép thanh toán
    this.sizeError = false;
    this.showPaymentDialog = true; // Mở hộp thoại thanh toán
  }
}

,
    addToCart(product) {
      // Thêm sản phẩm vào giỏ hàng
      const cartItem = this.cart.find(
        (item) => item.id === product.id && item.size === (product.type === "bánh ngọt" ? "S" : product.size)
      );
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({
          ...product,
          size: product.type === "bánh ngọt" ? "S" : null, // Mặc định size S cho bánh ngọt
          quantity: 1,
        });
      }
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border: 1px solid #ddd;
}
button {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
button.btn-danger {
  background-color: #dc3545;
  color: white;
}
button.btn-danger:hover {
  background-color: #c82333;
}
button.btn-success {
  background-color: #28a745;
  color: white;
}
button.btn-success:hover {
  background-color: #218838;
}
button.btn-primary {
  background-color: #007bff;
  color: white;
}
button.btn-primary:hover {
  background-color: #0056b3;
}
button.btn-secondary {
  background-color: #6c757d;
  color: white;
}
button.btn-secondary:hover {
  background-color: #5a6268;
}

.payment-dialog {
  background-color: white;
  border: 1px solid #ddd;
  padding: 30px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 25%;
}

.dialog-text {
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.large-button {
  font-size: 1.5rem;
  padding: 15px 40px;
  border-radius: 8px;
  margin: 30px;
}

.error-message {
  color: red;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
}
</style>
