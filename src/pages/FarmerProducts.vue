<template>
  <div class="container-fluid pt-5">
    <Header />
    <modal-add-product />
    <div class="card">
      <div class="row">
        <div class="col cart">
          <div class="title">
            <div class="row p-3">
              <div class=" col-lg-11 col-md-10 col-sm-9">
                <h4><b>My Products</b></h4>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3">
                <router-link class="btn border-2 border-secondary  mr-2  rounded-pill py-1 px-3 text-primary h-100"
                  data-bs-toggle="modal" data-bs-target="#ModalAddProduct"> Add
                </router-link>
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
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="C:\Users\Admin\agrivue\AGRIMARTVUE\src\assets\img\mango.jpg" alt="PRODUCT"
                      style="width: 120px; height: 120px" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">Mango</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">P120/kilo</p>
                </td>
                <td>
                  Fruit
                </td>
                <td>Sweet and juicy.</td>
                <td>
                  <router-link class="btn border-2 border-secondary rounded-pill py-1 px-3 text-primary h-50">
                    Edit
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="C:\Users\Admin\agrivue\AGRIMARTVUE\src\assets\img\cucumber.jpg" alt="Product" style="width: 120px; height: 120px" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">Cucumber</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">P64/kilo</p>
                </td>
                <td>
                  Vegetable
                </td>
                <td>Crisp, refreshing vegetables with a mild, watery flavor.</td>
                <td>
                  <router-link class="btn border-2 border-secondary rounded-pill py-1 px-3 text-primary h-50">
                    Edit
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="C:\Users\Admin\agrivue\AGRIMARTVUE\src\assets\img\apple.jpg" alt="Product"
                      style="width: 120px; height: 120px" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">Apple</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">P150/kilo</p>
                </td>
                <td>
                  Fruit
                </td>
                <td> Juicy, sweet and slightly tart flavor.</td>
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
import { MDBTable, MDBBtn, MDBBadge } from "mdb-vue-ui-kit";
import Header from "../components/Header.vue";
import ModalAddProduct from '../components/ModalAddProduct.vue';

export default {
  components: {
    MDBTable,
    MDBBtn,
    MDBBadge,
    Header,
    ModalAddProduct,
  },
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
</style>
