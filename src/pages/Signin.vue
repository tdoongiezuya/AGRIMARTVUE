<
<template>
  <section class="p-3 p-md-4 p-xl-4 mt-5">
    <div class="container sign pt-5 mt-5">
      <div class="card border-light-subtle shadow-sm">
        <div class="row g-0">
          <div class="col-12 col-md-6 text-bg-primary d-none d-md-block">
            <div
              class="d-flex image-holder align-items-center justify-content-center h-100"
            ></div>
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
              <form @submit.prevent="signin">
                <div class="row gy-3 gy-md-4 overflow-hidden">
                  <div class="col-12">
                    <label for="username" class="form-label"
                      >Username<span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      id="username"
                      v-model="form.username"
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
                      v-model="form.password"
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },

  methods: {
    ...mapActions(["commitSignin"]),
    signin() {
      console.log("Attempting to signin"); // Debugging line
      try {
        this.commitSignin(this.form)// Dispatch the Vuex action
        
      } catch (error) {
        
        console.error("Error during signin", error);
      }
    },
  },
};
</script>
