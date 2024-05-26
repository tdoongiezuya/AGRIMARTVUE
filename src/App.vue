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
      <nav1/>
    </div>
    <main>
      <router-view> </router-view>
    </main>
  </div>
</template>

<script>
import Nav1 from "./components/navbars/Nav1.vue";


export default {
  components: {
    Nav1,
  },
  computed: {
    // getConditionallyRenderedNavbar() {
    //   let user_level = null;
    //   try {
    //     // Check if the store is available before accessing its getters
    //     if (this.$store) {
    //       user_level = this.$store.getters.user_level;
    //     }
    //   } catch (error) {
    //     console.error("Error accessing user_level from store:", error);
    //     // Handle the error by setting user_level to a default value or handling the error differently
    //     user_level = null; // Or any other default value that makes sense in your application
    //   }

    //   // Now, use the user_level variable in your switch statement
    //   switch (user_level) {
    //     case 1:
    //       return Nav1;
    //     case 2:
    //       return Nav2;
    //     case 3:
    //       return Nav3;
    //     case null:
    //       return Nav1; // Assuming you want to render Nav3 when user_level is null or undefined
    //     default:
    //       return Nav1;
    //   }
      // try {
      //   const user_level = this.$store.getters.user_level;
      //   console.log(user_level);
      //   switch (user_level) {
      //     case 1:
      //       return Nav1;
      //     case 2:
      //       return Nav2;
      //     case 3:
      //       return Nav3;
      //     case null:
      //       return Nav3
      //     default:
      //       return Nav1;
      // }
      // } catch (error) {
      //   console.error('error: ', error);
      //   return Nav3;
      // }
    
  },
};
</script>
<style scoped></style>
