<script setup>
// import { ref, onMounted } from "vue";
// import axios from "axios";

// const baseURL = "http://localhost:3000/";
// const products = ref(null);

// const token = ref(localStorage.getItem("token"));

// const fetchData = async () => {
//     try {
//     const productsRes = await axios.get(baseURL + "products/");
//     products.value = productsRes.data;

//   } catch (err) {
//     console.log(err);
//   }
//   // fetch cart item if token is present i.e logged in
//     if (token.value) {
//       try {
//         const resCart = await axios.get(`${baseURL}cart/?token=${token.value}`);
//         cartCount.value = resCart.data.cartItems.length;
//       } catch (err) {
//         console.log("err", err);
//       }
//   }
// };

// onMounted(() => {
//   // Retrieve token and fetch data
//   token.value = localStorage.getItem("token");
//   //  fetchData();
// });
</script>

<template>
  <div>
    <div class="container-fluid">
      <component :is="getConditionallyRenderedNavbar"></component>
    </div>
    <main>
      <router-view> </router-view>
    </main>
  </div>
</template>

<script>
import Nav1 from "./components/navbars/Nav1.vue";
import Nav2 from "./components/navbars/Nav2.vue";
import Nav3 from "./components/navbars/Nav3.vue";

export default {
  components: {
    Nav1,
    Nav2,
    Nav3
  },
  computed: {
    getConditionallyRenderedNavbar() {
      const user_level = this.$store.getters.userLevel;
      switch (user_level) {
        case 1:
          return Nav2;
        case 2:
          return Nav3;
        default:
          return Nav1;
      }
    },
  },
};
</script>
<style scoped></style>
