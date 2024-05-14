<template>
  <div>
    <Header />
    <div class="container-fluid py-5 mt-5">
      <div class="container py-5">
        <div class="row g-4 mb-5">
          <div class="col-lg-8 col-xl-9">
            <div class="row g-4">
              <div class="col-lg-6">
                <div v-if="isLoading">Loading...</div>.
                <div class="border rounded" v-if="product">
                  <a href="#">
                    <img
                      src="https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg"
                      class="img-fluid rounded"
                      alt="Image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <h4 class="fw-bold mb-3">{{ product.product_name }}</h4>
                <p class="mb-3">Category: {{ product.product_category }}</p>
                <h5 class="fw-bold mb-3">P{{ product.price }} / Kg</h5>
                <div class="d-flex mb-4">
                  <i class="fa fa-star text-secondary"></i>
                  <i class="fa fa-star text-secondary"></i>
                  <i class="fa fa-star text-secondary"></i>
                  <i class="fa fa-star text-secondary"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p class="mb-4">
                  {{ product.description }}
                </p>
                <div class="input-group quantity mb-5" style="width: 100px">
                  <div class="input-group-btn">
                    <button
                      class="btn btn-sm btn-minus rounded-circle bg-light border"
                      @click="decrementQuantity"
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center border-0"
                    value="1"
                    v-model="quantity"
                  />
                  <div class="input-group-btn">
                    <button
                      class="btn btn-sm btn-plus rounded-circle bg-light border"
                      @click="incrementQuantity"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <a
                  href="#"
                  @click="addToCart(product_id)"
                  class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import swal from "sweetalert";
import axios from 'axios'; 
import {   mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      isLoading: true,
      product: {
        product_name: null,
        product_category: null,
        price : null,
        description: null,
      },
      quantity:1,
    };
  },
  methods: {
    async fetchProduct() {
      try {
        const product_id =this.$route.params.id; 
        const response = await axios.get(`http://localhost:3000/products/getProductById/${product_id}`);
        this.product = response.data; // Update the product data property with the fetched product
        this.isLoading = false; // Optionally, update a loading state
      } catch (error) {
        console.error('Error fetching product:', error);
        // Handle the error appropriately, e.g., show a message to the user
      }
    },
   
    addToCart(){
      
    },
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    
    // Other methods...
  },
  mounted() {
    // Example: Fetching a product when the component is mounted
    this.fetchProduct(this.product_id);
 
  },
  // mounted(){
  //   this.$store.dispatch('fetchAllProducts', this.product_id)
  // },
  components: { Header },
  
  // computed:{
  //  ...mapState(["product"]),
  // },
  // methods: {
    // ...mapActions(['addProductToCart']),
   
    // addToCart(){
    //   this.addProductToCart({
    //     product: this.product,
    //     quantity:1
    //   })
    // },
    // incrementQuantity() {
    //   this.quantity++;
    // },
    // decrementQuantity() {
    //   if (this.quantity > 0) {
    //     this.quantity--;
    //   }
    // },
    
  // },
  
  

};
</script>

<style></style>
