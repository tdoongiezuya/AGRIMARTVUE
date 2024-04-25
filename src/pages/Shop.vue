<template>
  <div class="container-fluid fruite py-5">
   <Header/>
    <div class="container py-5">
      <h1 class="mb-4">Agriculture Products</h1>
      <div class="row g-4">
        <div class="col-lg-12">
          <div class="row g-4">
            <div class="col-xl-3 mb-4">
              <div class="input-group w-100 mx-auto d-flex">
                <input
                  type="search"
                  class="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" class="input-group-text p-3"
                  ><i class="fa fa-search"></i
                ></span>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-3">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <h4>Categories</h4>
                    <ul class="list-unstyled fruite-categorie">
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Apples</a
                          >
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Oranges</a
                          >
                          <span>(5)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Strawbery</a
                          >
                          <span>(2)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Banana</a
                          >
                          <span>(8)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Pumpkin</a
                          >
                          <span>(5)</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-12"></div>
                <div class="col-lg-12"></div>
                <div class="col-lg-12"></div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row g-4 justify-content-center">
                <Card v-for="(product, index) in products" 
                  :key="index" 
                  :product="product"
                  @cart-updated="pushToCart"
                  />
              </div>
            </div>

            
              <!-- <div v-for="(item, index) in this.products" :key="index">
                <h1>{{ item }}</h1>
              </div>
              <button @click="add()" >add</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Card from "../components/Card.vue";
import Header from '../components/Header.vue';
import Categories from "../components/Categories.vue";

export default {
  components: { Categories, Card, Header },
  data(){
    return {
      BaseURL:"http://localhost:3000/",
      products: [],
      cart: [],
    }
  },
  async mounted() {
    await this.fetchProducts()
  }, 
  
  methods:{
    async fetchProducts() {
      try {
        const response = await axios.get(this.BaseURL + "products")
        this.products = response.data
      } catch (error) {
        console.error(error)
      }
    },
    pushToCart(product){
      this.cart.push(product)
    }
  }
};
</script>
<style></style>
