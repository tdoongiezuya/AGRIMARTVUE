<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Nav from "./components/Nav.vue";

const baseURL = "http://localhost:3000/";
const products = ref(null);
const categories = ref(null);
const token = ref(localStorage.getItem("token"));

const fetchData = async () => {
//   try {
//     const productsRes = await axios.get(baseURL + "products/");
//     products.value = productsRes.data;

//     const categoriesRes = await axios.get(baseURL + "category/");
//     categories.value = categoriesRes.data;
//   } catch (err) {
//     console.log(err);
//   }
//   // fetch cart item if token is present i.e logged in
//   if (token.value) {
//     try {
//       const resCart = await axios.get(`${baseURL}cart/?token=${token.value}`);
//       cartCount.value = resCart.data.cartItems.length;
//     } catch (err) {
//       console.log("err", err);
//     }
//  }
};

onMounted(() => {
 // Retrieve token and fetch data
 token.value = localStorage.getItem("token");
 fetchData();
});
</script>

<template>
  <div>
    <div class="container-fluid">
      
    </div>
    <main>
      <router-view
        :baseURL="baseURL"
        :products="products"
        :categories="categories"
        @fetchData="fetchData"
      >
      </router-view>
    </main>
  </div>
</template>

<script>

</script>
<style scoped></style>
