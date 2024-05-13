<template>
  <div class="container-fluid pt-5">
    <Header />
    <modal-add-product @add-product="addProduct" />
    <div class="card">
      <div class="row">
        <div class="col cart">
          <div class="title">
            <div class="row p-3">
              <div class="col-lg-11 col-md-10 col-sm-9">
                <h4><b>My Products</b></h4>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 d-flex align-items-center justify-content-end">
                <button class="btn border-2 border-secondary rounded-pill py-1 px-3 text-primary"
                        data-bs-toggle="modal" data-bs-target="#ModalAddProduct"> Add
                </button>
              </div>
            </div>
          </div>
          <MDBTable class="align-middle mb-0 bg-white px-2" variant="light" responsive bordered>
            <thead class="bg-light">
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td>
                  <div class="d-flex align-items-center">
                    <img v-if="product.photo" :src="product.photo" alt="PRODUCT" class="product-image" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">{{ product.productName }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">{{ product.price }}</p>
                </td>
                <td>{{ product.category }}</td>
                <td>{{ product.description }}</td>
                <td>
                  <router-link class="btn border-2 border-secondary rounded-pill py-1 px-3 text-primary h-50">
                    Edit
                  </router-link>
                </td>
              </tr>
            </tbody>
          </MDBTable>
        </div>
      </div>
    </div>
  </div>
  <!-- <table class="table is-striped is-bordered mt-2 is-fullwidth">
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
    </table> -->
</template>

<script>
import { MDBTable } from "mdb-vue-ui-kit";
import Header from "../components/Header.vue";
import ModalAddProduct from '../components/ModalAddProduct.vue';

export default {
  components: {
    MDBTable,
    Header,
    ModalAddProduct,
  },
  data() {
    return {
      products: [
      ]
    };
  },
  methods: {
    addProduct(newProduct) {
      this.products.push(newProduct);
    }
  }
};
</script>

<style scoped>
.card {
  margin: auto;
  max-width: 80%;
  width: 100%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}

@media (max-width: 767px) {
  .card {
    margin: 3vh auto;
  }
}

.cart {
  background-color: #fff;
  padding: 4vh 5vh;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}
.product-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
</style>
