<template>
  <section class="p-3 p-md-4 p-xl-4 mt-5">
    <div class="container sign pt-5 mt-5">
      <div class="card border-light-subtle shadow-sm">
        <div class="row g-0">
          <div class="col-12 col-md-6 text-bg-primary d-none d-md-block">
            <div
              class="d-flex image-holder align-items-center justify-content-center h-100"
            >
              <!-- <div class=" col-10 col-xl-8 py-3">
              
              
            </div> -->
            </div>
          </div>
          <div class="col-12 col-md-6 sign-form">
            <div class="card-body p-3 p-md-4 p-xl-5 bg-white">
              <div class="row">
                <div class="col-12">
                  <div class="mb-5">
                    <h2 class="h3">Sign In</h2>
                    <h3 class="fs-6 fw-normal text-secondary m-0">
                      Sign in to your existing account
                    </h3>
                  </div>
                </div>
              </div>
              <form @submit="signin">
                <div class="row gy-3 gy-md-4 overflow-hidden">
                  <div class="col-12">
                    <label for="email" class="form-label"
                      >Email<span class="text-danger">*</span></label
                    >
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="name@example.com"
                      v-model="email"
                      required
                    />
                  </div>

                  <div class="col-12">
                    <label for="password" class="form-label"
                      >Password <span class="text-danger">*</span></label
                    >
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      value=""
                      v-model="password"
                      required
                    />
                  </div>

                  <div class="col-12">
                    <div class="d-grid">
                      <button
                        class="btn bsb-btn-xl btn-primary text-white"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col-12">
                  <hr class="mt-5 mb-4 border-secondary-subtle" />
                  <p class="m-0 text-secondary text-center">
                    Don't have an account?
                    <router-link
                      :to="{ name: 'Signup' }"
                      class="link-primary text-decoration-none"
                      >Sign up</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  props: ["baseURL"],
  data() {
    return {
      email: null,
      password: null,
      loading: null,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      // set loading to true
      this.loading = true;

      // request body
      const body = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post(`${this.baseURL}/login`, body)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          swal({
            text: "Login successful",
            icon: "success",
          });
          this.$emit("fetchData");
          this.$router.push({ name: "Home" });
        })
        .catch((err) => console.log("err", err));
    },
  },
};
</script>

<style scoped></style>
