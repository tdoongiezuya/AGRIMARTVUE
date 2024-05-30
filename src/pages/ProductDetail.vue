<template>
  <div>
    <Header />
    <div class="container-fluid py-5 mt-5">
      <div class="container py-5">
        <div class="row g-4 mb-5">
          <div class="col-lg-8 col-xl-9">
            <div class="row g-4">
              <div v-if="isLoading">Loading...</div>
              <div>
                <router-link
                  class="btn border border-secondary rounded-pill px-3 text-primary"
                  :to="{ name: 'Shop' }"
                >
                  return to shop</router-link
                >
              </div>
              <div class="col-lg-6">
                <div class="border rounded">
                  <a href="#">
                    <img
                      :src="`data:image/png;base64,${product.image_data}`"
                      class="img-fluid w-100 rounded"
                      alt=""
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
                  @click="addToCart()"
                  class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>

              <div class="col-lg-12">
                <nav>
                  <div class="nav nav-tabs mb-3">
                    <button
                      class="nav-link active border-white border-bottom-0"
                      type="button"
                      role="tab"
                      id="nav-about-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-about"
                      aria-controls="nav-about"
                      aria-selected="true"
                    >
                      Description
                    </button>
                    <button
                      class="nav-link border-white border-bottom-0"
                      type="button"
                      role="tab"
                      id="nav-mission-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-mission"
                      aria-controls="nav-mission"
                      aria-selected="false"
                    >
                      Reviews
                    </button>
                  </div>
                </nav>
                <div class="tab-content mb-5">
                  <div
                    class="tab-pane active"
                    id="nav-about"
                    role="tabpanel"
                    aria-labelledby="nav-about-tab"
                  >
                    <p class="my-4">
                      {{ product.description }}
                    </p>
                    
                    <div class="px-2">
                      <div class="row g-4">
                        <div class="col-6">
                          <div
                            class="row bg-light align-items-center text-center justify-content-center py-2"
                          >
                            <div class="col-6">
                              <p class="mb-0">Seller</p>
                            </div>
                            <div class="col-6">
                              <p class="mb-0">{{ product.userInfo.first_name }} {{ product.userInfo.last_name }}</p>
                            </div>
                          </div>
                          <div
                            class="row text-center align-items-center justify-content-center py-2"
                          >
                            <div class="col-6">
                              <p class="mb-0">City</p>
                            </div>
                            <div class="col-6">
                              <p class="mb-0">{{ product.address.city }}</p>
                            </div>
                          </div>
                          <div
                            class="row bg-light text-center align-items-center justify-content-center py-2"
                          >
                            <div class="col-6">
                              <p class="mb-0">Phone number</p>
                            </div>
                            <div class="col-6">
                              <p class="mb-0">{{ product.address.mobile }}</p>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane"
                    id="nav-mission"
                    role="tabpanel"
                    aria-labelledby="nav-mission-tab"
                  >
                    <div class="d-flex">
                      <img
                        src="../assets/img/avatar.jpg"
                        class="img-fluid rounded-circle p-3"
                        style="width: 100px; height: 100px"
                        alt=""
                      />
                      <div class="">
                        <p class="mb-2" style="font-size: 14px">
                          April 12, 2024
                        </p>
                        <div class="d-flex justify-content-between">
                          <h5>Jason Smith</h5>
                          <div class="d-flex mb-3">
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star"></i>
                          </div>
                        </div>
                        <p>
                          The generated Lorem Ipsum is therefore always free
                          from repetition injected humour, or non-characteristic
                          words etc. Susp endisse ultricies nisi vel quam
                          suscipit
                        </p>
                      </div>
                    </div>
                    <div class="d-flex">
                      <img
                        src="../assets/img/avatar.jpg"
                        class="img-fluid rounded-circle p-3"
                        style="width: 100px; height: 100px"
                        alt=""
                      />
                      <div class="">
                        <p class="mb-2" style="font-size: 14px">
                          April 12, 2024
                        </p>
                        <div class="d-flex justify-content-between">
                          <h5>Sam Peters</h5>
                          <div class="d-flex mb-3">
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                        </div>
                        <p class="text-dark">
                          The generated Lorem Ipsum is therefore always free
                          from repetition injected humour, or non-characteristic
                          words etc. Susp endisse ultricies nisi vel quam
                          suscipit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="nav-vision" role="tabpanel">
                    <p class="text-dark">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                      tempor sit. Aliqu diam amet diam et eos labore. 3
                    </p>
                    <p class="mb-0">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit
                    </p>
                  </div>
                </div>
              </div>
              <form action="#">
                <h4 class="mb-5 fw-bold">Leave a Reply</h4>
                <div class="row g-4">
                  <div class="col-lg-6">
                    <div class="border-bottom rounded">
                      <input
                        type="text"
                        class="form-control border-0 me-4"
                        placeholder="Yur Name *"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="border-bottom rounded">
                      <input
                        type="email"
                        class="form-control border-0"
                        placeholder="Your Email *"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="border-bottom rounded my-4">
                      <textarea
                        name=""
                        id=""
                        class="form-control border-0"
                        cols="30"
                        rows="8"
                        placeholder="Your Review *"
                        spellcheck="false"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex justify-content-between py-3 mb-5">
                      <div class="d-flex align-items-center">
                        <p class="mb-0 me-3">Please rate:</p>
                        <div
                          class="d-flex align-items-center"
                          style="font-size: 12px"
                        >
                          <i class="fa fa-star text-muted"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <a
                        href="#"
                        class="btn border border-secondary text-primary rounded-pill px-4 py-3"
                      >
                        Post Comment</a
                      >
                    </div>
                  </div>
                </div>
              </form>
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
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  // props: ["id"],
  data() {
    return {
      isLoading: true,
      product: {
        image_data: null,
        image_name: null,
        product_name: null,
        product_category: null,
        price: null,
        description: null,
        user_info_id: null,
        userInfo: {},
        address: {},
      },
      quantity: 1,
    };
  },
  created() {
    this.product_id = this.$route.params.id;
    console.log(this.product_id);
  },
  // computed:{
  //  product() {
  //   return this.$store.state.product;
  //  },
  //  isLoading() {
  //     return this.$store.state.isLoading; // Use Vuex state for loading indicator
  //   },
  // },
  methods: {
    ...mapActions(["addProductToCart"]),
    async fetchProduct() {
      try {
        const product_id = this.product_id;
        const response = await axios.get(
          `products/getProductById/${product_id}`
        );
        this.product = response.data; // Update the product data property with the fetched product
        console.log(this.product);
        this.isLoading = false; // Optionally, update a loading state
      } catch (error) {
        console.error("Error fetching product:", error);
        // Handle the error appropriately, e.g., show a message to the user
      }
    },

    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity: this.quantity,
      });
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
  //   this.$store.dispatch('fetchProduct', { productId: this.product_id }).then(() => {

  //   }).catch((error) => {
  //     console.error('Error fetching product:', error);

  //   });
  // },
  components: { Header },

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
