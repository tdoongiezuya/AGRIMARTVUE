<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.product_id">
          <td>
            {{ item.product_name }}
          </td>
          <td>{{ item.product_price }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.product_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteProduct(item.product_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import axios
import axios from "axios";

export default {
  data() {
    return {
      items: [
        {
          product_id: 1,
          product_name: "Product A",
          product_price: "$100",
        },
        {
          product_id: 2,
          product_name: "Product B",
          product_price: "$200",
        },
        {
          product_id: 3,
          product_name: "Product C",
          product_price: "$300",
        },
      ],
    };
  },
//   created() {
//     this.getProducts();
//   },
  methods: {
    // //get all products
    // async getProducts() {
    //   try {
    //     const response = await axios.get("http://localhost:5000/products");
    //     this.items = response.data;
    //     console.log(this.items);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // //delete product
    // async deleteProduct(id) {
    //   try {
    //     await axios.delete(`http://localhost:5000/products/${id}`);
    //     this.getProducts();
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
};
</script>

<style></style>