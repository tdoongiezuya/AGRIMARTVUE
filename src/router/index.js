import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Shop from "../pages/Shop.vue";
import Cart from "../pages/Cart.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import Signin from "../pages/Signin.vue";
import Signup from "../pages/Signup.vue";
import Chat from "../pages/Chat.vue";
import Profile from "../pages/Profile.vue";
import DefaultDashboard from "../layouts/DefaultDashboard.vue";
import Chat2 from "../pages/Chat2.vue";
import AdminDashboard from "../layouts/AdminDashboard.vue";
import FarmerDashboard from "../layouts/FarmerDashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/products/detail/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,

  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },  
  {
    path: "/chat2",
    name: "Chat2",
    component: Chat2,
  },
  {
    path: "/default",
    name: "DefaultDashboard",
    component: DefaultDashboard,
  },
  {
    path: "/admin",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/farmer",
    name: "FarmerDashboard",
    component: FarmerDashboard,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
