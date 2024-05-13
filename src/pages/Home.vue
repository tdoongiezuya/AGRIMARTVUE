<template>
  <div>
    <Header />
    <!-- Hero Start -->
    <div class="container-fluid py-5 mb-5 hero-header">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-md-12 col-lg-7">
            <h1 class="mb-1 display-1 text-primary">Your One-Stop</h1>
            <h4 class="mb-3 display-6 text-secondary">
              Agriculture Marketplace
            </h4>
            <h6 class="mb-3 text-muted">
              Discover the freshest and healthiest organic produce straight from
              the farm to your table on AgriMart, your agriculture marketplace
              connecting you with trusted organic farmers and suppliers.
            </h6>
            <h5 class="mb-5 text-muted" v-if="isLoggedIn">hello, {{ first_name }} {{ last_name }}</h5>
            <div class="position-relative mx-auto">
              <router-link
                to="/shop"
                class="btn btn-primary border-2 border-secondary py-3 px-4 rounded-pill text-white h-100"
              >
                <i class="fa fa-shopping-bag me-2 text-white"></i> Shop Now
              </router-link>
              <router-link
                :to="{ name: 'Signin' }"
                class="btn border-2 border-secondary rounded-pill py-3 px-4 mx-4 text-primary h-100"
              >
                <i class="fas fa-user me-2"></i> Sign in
              </router-link>
            </div>
          </div>
          <carousel />
        </div>
      </div>
    </div>
    <!-- Hero End -->

    <!-- Back to Top -->
    <a
      href="#"
      class="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      ><i class="fa fa-arrow-up"></i
    ></a>
  </div>
</template>
<script>
import Carousel from '../components/Carousel.vue'
import {mapGetters} from 'vuex';
export default {
    components: { Carousel},
    computed: {
        ...mapGetters([
            'first_name', 'last_name'
        ]),
        
        isLoggedIn() {
            return this.$store.getters.authenticated
        },
        user() {
            return this.$store.getters.getUser
        },
    
    }

}
</script>
<style scoped></style>
