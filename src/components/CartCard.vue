<template>
  <div class="row border-top border-bottom">
    <div class="row main align-items-center">
      <div class="col-2">
        <img
          class="img-fluid"
          src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2020/06/meat-1200x675.jpg"
        />
      </div>
      <div class="col">
        <div class="row text-muted">Shirt</div>
        <div class="row">Cotton T-shirt</div>
      </div>
      <div class="col">P 100 / kg</div>
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
</template>

<script></script>

<style scoped>
img {
  width: 300px;
}
</style>
