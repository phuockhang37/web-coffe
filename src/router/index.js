import { createRouter, createWebHistory } from "vue-router";

// Import các trang bạn sẽ điều hướng tới
import Coffee from '../components/ComCoffee.vue';
import MilkTea from '../components/ComMilkTea.vue';
import BanhNgot from '../components/ComBanhNgot.vue';
import Home from '@/components/ComHome.vue';
import ThucDon from '@/components/ComThucDon.vue';
import GioiThieu from '@/components/ComGioiThieu.vue';
import LienHe from '@/components/ComLienHe.vue';
import TinTuc from '@/components/ComTinTuc.vue';
import ProductDetail from '@/components/ComProductDetail.vue';
import Cart from '@/components/ComCart.vue';
import Login from '@/components/ComLogin.vue';
import Register from '@/components/ComRegister.vue';

// Define routes
const routes = [
  // Routes cho các trang thực đơn
  {
    path: '/coffee',
    name: 'Coffee',
    component: Coffee
  },
  {
    path: '/milk-tea',
    name: 'MilkTea',
    component: MilkTea
  },
  {
    path: '/banhngot',
    name: 'BanhNgot',
    component: BanhNgot
  },

  // Các routes còn lại
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/thucdon",
    name: "ThucDon",
    component: ThucDon
  },
  {
    path: "/gioithieu",
    name: "GioiThieu",
    component: GioiThieu
  },
  {
    path: "/lienhe",
    name: "LienHe",
    component: LienHe
  },
  {
    path: "/tintuc",
    name: "TinTuc",
    component: TinTuc
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

// Create and export router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
