<template>
  <div>
    <Header/>
    <div class="container-fluid py-5 mt-5">
      <div class="container py-5">
        <div class="row g-4 mb-5">
          <div class="col-lg-8 col-xl-9">
            <div class="row g-4">
              <div class="col-lg-6">
                <div class="border rounded">
                  <a href="#">
                    <img
                      :src="product.image"
                      class="img-fluid rounded"
                      alt="Image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <h4 class="fw-bold mb-3">{{ product.productName }}</h4>
                <p class="mb-3">{{ product.category }}</p>
                <h5 class="fw-bold mb-3">{{ product.price }}</h5>
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
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center border-0"
                    value="1"
                  />
                  <div class="input-group-btn">
                    <button
                      class="btn btn-sm btn-plus rounded-circle bg-light border"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>

              <!-- <div class="col-lg-6">
              <h4 class="fw-bold mb-3">Brocoli</h4>
              <p class="mb-3">Category: Vegetables</p>
              <h5 class="fw-bold mb-3">3,35 $</h5>
              <div class="d-flex mb-4">
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star"></i>
              </div>
              <p class="mb-4">
                The generated Lorem Ipsum is therefore always free from
                repetition injected humour, or non-characteristic words etc.
              </p>
              <p class="mb-4">
                Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                peacock flounder; chain pickerel hatchetfish, pencilfish
                snailfish
              </p>
              <div class="input-group quantity mb-5" style="width: 100px">
                <div class="input-group-btn">
                  <button
                    class="btn btn-sm btn-minus rounded-circle bg-light border"
                  >
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
                <input
                  type="text"
                  class="form-control form-control-sm text-center border-0"
                  value="1"
                />
                <div class="input-group-btn">
                  <button
                    class="btn btn-sm btn-plus rounded-circle bg-light border"
                  >
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
              <a
                href="#"
                class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                cart</a
              >
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "../components/Header.vue";

export default {
  components: { Header },
  props: {
    product: []
  },
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  async mounted() {
    await this.fetchProducts()
  }, 
  methods:{
    fetchProducts() {
      axios.get(`http://localhost:3000/products/${this.id}`)
        .then(response => {
          this.product = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style></style>
