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
                      ref="photoUpload"
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
        product_name: "",
        product_category: "",
        price: "",
        description: "",
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

        const fileInput = this.$refs.photoUpload;
        if (fileInput && fileInput.files.length > 0) {
          formData.append("file", fileInput.files[0]);
        }

        const response = await axios.post("products/createProduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(response.data);
        this.product = {
          product_name: "",
          price: "",
          product_category: "",
          description: "",
          files: null,
          user_info_id: null,
        };
        this.$emit("reload-products");

        // Wait for the DOM to update
        this.$nextTick(() => {
          // Manually trigger Bootstrap's modal hide method
          $('#ModalAddProduct').modal('hide');

          // Optionally, manually remove the backdrop if it remains
          $('.modal-backdrop').remove();
        });
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
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

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>