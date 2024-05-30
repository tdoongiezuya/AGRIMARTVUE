<template>
  <div class="col-md-12 col-lg-5">
    <div
      id="carouselId"
      class="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active rounded">
          <img
            src="../assets/img/fruite-item-6.jpg"
            class="img-fluid w-100 h-100 bg-secondary rounded"
            alt="First slide"
          />
         
        </div>
        <div class="carousel-item rounded">
          <img
            src="../assets/img/hero-img-2.jpg"
            class="img-fluid w-100 h-100 rounded"
            alt="Second slide"
          />
         
        </div>
        <!-- Left and right controls/icons -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
$(".vegetable-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  center: false,
  dots: true,
  loop: true,
  margin: 25,
  nav: true,
  navText: [
    '<i class="bi bi-arrow-left"></i>',
    '<i class="bi bi-arrow-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

export default {};
</script>

<style></style>
