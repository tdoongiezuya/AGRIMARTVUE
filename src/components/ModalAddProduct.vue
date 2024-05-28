<template>
  <div>
    <div
      class="modal fade bd-example-modal-lg"
      id="ModalAddProduct"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content bg-white rounded-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6">
                <form @submit.prevent="submitProduct">
                  <div class="form-group mb-3">
                    <label for="product_name">Product Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="product.product_name"
                      placeholder="Enter product name"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="price">Price</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="product.price"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="category">Category</label>
                    <select
                      class="form-control"
                      v-model="product.product_category"
                      required
                    >
                      <option>Fruits</option>
                      <option>Vegetables</option>
                      <option>Meats</option>
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <label for="description">Product Description</label>
                    <textarea
                      class="form-control"
                      v-model="product.description"
                      rows="3"
                      placeholder="Enter product description"
                      required
                    ></textarea>
                  </div>
                  <div class="form-group mb-3">
                    <label for="photoUpload">Upload Photo</label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="photoUpload"
                      @change="previewImage"
                      required
                    />
                  </div>
                </form>
              </div>
              <div class="col-lg-6">
                <div class="container-fluid py-5">
                  <div class="container py-5">
                    <div class="row justify-content-center">
                      <div class="col-lg-10">
                        <h6 class="mb-4">Uploaded Photo</h6>
                        <div id="uploadedPhoto" class="text-center">
                          <img
                            v-if="product.files"
                            :src="product.files"
                            alt="Uploaded Photo"
                            class="img-fluid"
                          />
                          <div v-else>No photo uploaded</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="submitProduct"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: {
        files: null,
        product_name: null,
        product_category: null,
        price: null,
        description: null,
        user_info_id: null,
      },
    };
  },
  methods: {
    async submitProduct() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        this.product.user_info_id = user.user_info_id;

        const formData = new FormData();
        formData.append("product_name", this.product.product_name);
        formData.append("price", this.product.price);
        formData.append("product_category", this.product.product_category);
        formData.append("description", this.product.description);
        formData.append("user_info_id", this.product.user_info_id);
        if (this.product.files) {
          formData.append("image", this.product.files);
        }

        const response = await axios.post("products/createProduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Check if the request was successful
        if (response.status === 201) {
          // Assuming 201 is the success status code
          console.log(response.data); // Log the response data
          // Display a success message or perform other success-related actions
          alert("Product created successfully!");
          // Optionally, reset the form or update the UI to reflect the success
          this.product = {
            files: null,
            product_name: "",
            product_category: "",
            price: "",
            description: "",
            user_info_id: "",
          };
        } else {
          // Handle errors
          console.error(
            "Error adding product:",
            response.data.error || "Unknown error occurred"
          );
          // Display an error message or perform other error-related actions
          alert("An error occurred while adding the product.");
        }
      } catch (error) {
        console.error("Error adding product:", error);
        // Handle network errors or other exceptions
        alert("Network error occurred. Please try again later.");
      }
    },
    // async submitProduct() {
    //   try {
    //     const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user from local storage
    //     this.product.user_info_id = user.user_info_id; // Assign username as addedBy

    //     // Convert product data to a JSON-friendly format
    //     const payload = {
    //       files: this.product.files,
    //       product_name: this.product.product_name,
    //       price: this.product.price,
    //       product_category: this.product.product_category,
    //       description: this.product.description,
    //       user_info_id: this.product.user_info_id,
    //     };

    //     // Send the payload as JSON
    //     const response = await axios.post("products/createProduct", payload, {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });

    //     console.log(response.data);
    //     // Reset form fields after successful submission
    //     this.product = {
    //       files: null,
    //       product_name: "",
    //       product_category: "",
    //       price: "",
    //       description: "",
    //       user_info_id: "",
    //     };
    //     // Emit an event to refresh products after adding
    //     this.$emit("reload-products");
    //   } catch (error) {
    //     console.error("Error adding product:", error);
    //   }
    // },

    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.product.files = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.product.files = null;
      }
    },
  },
};
</script>

<style></style>
