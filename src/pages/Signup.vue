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
                    <h2 class="h3">Registration</h2>
                    <h3 class="fs-6 fw-normal text-secondary m-0">
                      Enter your details to register
                    </h3>
                  </div>
                </div>
              </div>
              <form @submit.prevent="signup">
                <div class="row gy-3 gy-md-4 overflow-hidden">
                  <div class="row gy-3 overflow-hidden">
                    <div class="col-md-6">
                      <label for="firstName" class="form-label"
                        >First Name <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        name="firstName"
                        id="firstName"
                        v-model="first_name"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="lastName" class="form-label"
                        >Last Name <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        name="lastName"
                        id="last_name"
                        v-model="last_name"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label"
                      >Email <span class="text-danger">*</span></label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="name@example.com"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="userName" class="form-label"
                      >Username<span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="userName"
                      id="user_name"
                      v-model="username"
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
                      v-model="password"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="password" class="form-label">
                      Confirm Password <span class="text-danger">*</span></label
                    >
                    <input
                      type="password"
                      class="form-control"
                      name="passwordConfirm"
                      id="passwordConfirm"
                      v-model="passwordConfirm"
                      value=""
                      required
                    />
                  </div>
                 
                  <div
                    class="d-md-flex justify-content-start align-items-center mb-4 py-2"
                  >
                    <h6 class="mb-0 me-4">Role:</h6>

                    <div class="form-check form-check-inline mb-0 me-4">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="consumer"
                        v-model="user_level"
                        value=1
                      />
                      <label class="form-check-label" for="consumer"
                        >Consumer</label
                      >
                    </div>

                    <div class="form-check form-check-inline mb-0 me-4">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="farmer"
                        v-model="user_level"
                        value=2
                      />
                      <label class="form-check-label" for="farmer"
                        >Farmer</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                      <button
                        class="btn bsb-btn-xl btn-primary text-white"
                        type="submit"
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col-12">
                  <hr class="mt-5 mb-4 border-secondary-subtle" />
                  <p class="m-0 text-secondary text-center">
                    Already have an account?
                    <router-link
                      :to="{ name: 'Signin' }"
                      class="link-primary text-decoration-none"
                      >Sign in</router-link
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
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      email: null,
      username:null,
      first_name: null,
      last_name: null,
      password: null,
      passwordConfirm: null,
      user_level: null,
    };
  },
  methods: {
    // async signup(e) {
    //   e.preventDefault();
    //   // if the password matches
    //   if (this.password === this.passwordConfirm) {
    //     // make the post body
    //     const user = {
    //       email: this.email,
    //       firstName: this.firstName,
    //       lastName: this.lastName,
    //       password: this.password,
    //     };

    //     console.log("user", user);
    //     await axios
    //       .post(`${this.baseURL}users`, user)
    //       .then(() => {
    //         this.$router.replace("/");
    //         swal({
    //           text: "User signup successful, please login",
    //           icon: "success",
    //         });
    //       })
    //       .catch((err) => console.log("err", err));
    //   } else {
    //      // passwords are not matching
    //      swal({
    //                 text: "Error! Passwords are not matching",
    //                 icon: "error",
    //                 closeOnClickOutside: false,
    //             });
    //   }
    // },
    async signup() {
      
      // if the password matches
      if (this.password === this.passwordConfirm) {
        // make the post body
        const user = {
          email: this.email,
          first_name: this.first_name,
          username: this.username,
          last_name: this.last_name,
          password: this.password,
          user_level: this.user_level,
        };

        // call the API
        await axios({
          method: "post",
          url: "http://localhost:3000/auth/register",
          data: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            // redirect to home page
            this.$router.replace("/");
            swal({
              text: "User signup successful. Please Login",
              icon: "success",
              closeOnClickOutside: false,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // passwords are not matching
        swal({
          text: "Error! Passwords are not matching",
          icon: "error",
          closeOnClickOutside: false,
        });
      }
    },
  },
};
</script>

<style scoped></style>
