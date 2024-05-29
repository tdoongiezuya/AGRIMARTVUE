<template>
  <div class="container-fluid fruite py-5">
    <Header />
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
                <span id="search-icon-1" class="input-group-text p-3">
                  <i class="fa fa-search"></i>
                </span>
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
                          <a href="#"><i class="fas fa-apple-alt me-2"></i>Fruits</a>
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"><i class="fas fa-apple-alt me-2"></i>Vegetables</a>
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"><i class="fas fa-apple-alt me-2"></i>Meat</a>
                          <span>(3)</span>
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
                <div v-if="isLoading" class="text-center">Loading...</div>
                <Card
                  v-for="product in products"
                  :key="product.product_id"
                  :product="product"
                  v-else
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";

export default {
  components: { Card, Header },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    }),
  },
  async mounted() {
    try {
      await this.$store.dispatch("fetchAllProducts");
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style></style>