<template>
  <div class="container-fluid pt-5">
    <Header />
    <div class="card">
      <div class="row">
        <div class="col cart">
          <div class="title">
            <div class="row">
              <div class="col-lg-11 col-md-10 col-sm-9">
                <h4><b>Shopping Cart</b></h4>
              </div>
            </div>
          </div>
          <MDBTable class="align-middle mb-0 bg-white px-2" variant="light" responsive bordered>
            <thead class="bg-light">
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cartItem in cart" :key="cartItem.product.product_id">
                <td>
                  <div class="d-flex align-items-center">
                    <img  :src="`data:image/png;base64,${cartItem.product.image_data}`" alt="PRODUCT" class="product-image" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">{{ cartItem.product.product_name }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">{{ cartItem.product.price }}</p>
                </td>
                <td>{{ cartItem.product.product_category }}</td>
                
                <td>
                  <router-link
                    class="btn border-2 border-secondary rounded-pill px-2 text-primary contact-seller" 
                  >
                    <i class="fas fa-comment me-2"></i> Contact Seller
                  </router-link>
                  
                </td>
                <td >
                  <button class="btn border-2 border-secondary rounded-pill py-1 px-3 text-primary h-50">
                    <i class="fas fa-trash-alt text-primary"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </MDBTable>
          <!-- <div  v-for="cartItem in cart" :key="cartItem.product.product_id">
            <div
              class="row border-top border-bottom"
            >
              <div class="row main align-items-center">
                <div class="col-2">
                  <img
                    class="img-fluid"
                    :src="`data:image/png;base64,${cartItem.product.image_data}`"
                  />
                </div>
                <div class="col">
                  <div class="row text-muted">
                    {{ cartItem.product.product_name }}
                  </div>
                </div>
                <div class="col">P {{ cartItem.product.price }} / kg</div>
                <div class="col">
                  <router-link
                    class="btn border-2 border-secondary rounded-pill py-1 px-3 text-primary h-50"
                  >
                    <i class="fas fa-comment me-2"></i> Contact Seller
                  </router-link>
                </div>
                <div class="col">
                  <a @click="removeCart" class="mx-5 btn"
                    ><i class="fas fa-trash-alt text-primary"></i
                  ></a>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { MDBTable } from "mdb-vue-ui-kit";
import CartCard from "../components/CartCard.vue";
import Header from "../components/Header.vue";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      // cartItem: {
      //   id: null, // Assuming each cart item has an ID
      //   name: "",
      //   price: 0,
      // },
    };
  },
  components: {  MDBTable,CartCard, Header },
  computed: {
    ...mapGetters(['getCart']), // Map the getCart getter here
    cart() {
      return this.getCart; // Access the cart via the mapped getter
    },
  },
  methods: {
    // async fetchCartItems() {
    //   try {
    //     const response = await axios.get("");
    //     this.cartItems = response.data; // Assuming the API returns an array of cart items
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
  mounted() {},
};
</script>

<style scoped>
table th, table td {
  white-space: nowrap; /* Prevents text from wrapping */
  overflow: hidden; /* Hides the overflowed text */
  text-overflow: ellipsis; /* Truncates text with an ellipsis */
}
.btn.contact-seller {
  min-height: 40px; /* Adjust based on your design needs */
  height:40px
}
.card {
  margin: auto;
  max-width: 950px;
  width: 80%;
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
