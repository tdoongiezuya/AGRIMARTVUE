<template>
  <div class="container-fluid pt-5">
    <Header />
    <div class="card">
      <div class="row">
        <div class="col cart">
          <div class="title">
            <div class="row">
              <div class="col">
                <h4><b>Shopping Cart</b></h4>
              </div>
            </div>
          </div>
          <div class="row border-top border-bottom">
            <div class="row main align-items-center">
              <div class="col-2">
                <img
                  class="img-fluid"
                  src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2020/06/meat-1200x675.jpg"
                />
              </div>
              <div class="col">
                <div class="row text-muted">Pork leg</div>
              </div>
              <div class="col">P {{ cartItem.price }} / kg</div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CartCard from "../components/CartCard.vue";
import Header from "../components/Header.vue";
export default {
  data() {
    return {
      cartItem: {
        id: null, // Assuming each cart item has an ID
        name: "",
        price: 0,
      },
    };
  },
  components: { CartCard, Header },
  props: ["baseURL"],
  methods: {
    async fetchCartItems() {
      try {
        const response = await axios.get('');
        this.cartItems = response.data; // Assuming the API returns an array of cart items
      } catch (error) {
        console.error(error);
      }
    },

  },
  mounted() {},
};
</script>

<style scoped>
.card {
  margin: auto;
  max-width: 950px;
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
