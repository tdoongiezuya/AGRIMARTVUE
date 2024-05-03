<template>
  <div class="col-md-6 col-lg-6 col-xl-4">
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
      <div class="rounded position-relative fruite-item">
        <div class="fruite-img">
          <img
            :src="product.image"
            class="img-fluid w-100 h-500 rounded-top"
            alt=""
          />
        </div>

        <div
          class="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style="top: 10px; left: 10px"
        >
          {{ product.category }}
        </div>

        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
          <router-link
            :to="{ name: 'ProductDetail', params: { id: product.id } }"
          >
            <h4>{{ product.productName }}</h4>
            <p class="text-muted">
              {{ product.description }}
            </p>
          </router-link>

          <div class="d-flex justify-content-between flex-lg-wrap">
            <p class="text-dark fs-5 fw-bold mb-0 pb-2">
              P{{ product.price }} / kg
            </p>
            <a
              href="#"
              class="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i class="fa fa-shopping-bag me-2 text-primary"></i>View
              Details</a
            >
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  emits: ["cartUpdated"],

  methods: {
    addToCart(product) {
      this.$emit("cartUpdated", product);
    },
  },
};
</script>

<style></style>
