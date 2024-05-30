<template>
  <div class="col-md-6 col-lg-6 col-xl-4">
    <router-link :to="{ name: 'ProductDetail', params: { id: product.product_id } }">
      <div class="rounded position-relative fruite-item">
        <div class="fruite-img">
          <!-- Displaying the base64 encoded image or a placeholder if image_data is null -->
          <img
            :src="imageSrc"
            class="img-fluid w-100 rounded-top"
            alt=""
          />
        </div>
        <div
          class="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style="top: 10px; left: 10px"
        >
          {{ product.product_category }}
        </div>
        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
          <router-link
            :to="{ name: 'ProductDetail', params: { id: product.product_id } }"
          >
            <h4>{{ product.product_name }}</h4>
            <p class="text-muted">farmer: {{ product.userInfo.first_name }} {{ product.userInfo.last_name }}</p>
            <p class="text-muted">address: {{ product.address.city }}</p>
          </router-link>
          <div class="d-flex justify-content-between flex-lg-wrap">
            <p class="text-dark fs-5 fw-bold mb-0 pb-2">
              P{{ product.price }} / kg
            </p>
            <a
              href="#"
              class="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i class="fa fa-shopping-bag me-2 text-primary"></i>View Details
            </a>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import placeholderImage from '../assets/img/logo.png'; // Ensure this path is correct

export default {
  props: ["product"],
  computed: {
    imageSrc() {
      // Use the base64 encoded image if available, otherwise use the placeholder image
      return this.product.image_data
        ? `data:image/png;base64,${this.product.image_data}`
        : placeholderImage;
    }
  }
};
</script>

<style>
.fruite-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
p {
  margin: 3px !important;
}
</style>