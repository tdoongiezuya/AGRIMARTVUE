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
        const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user from local storage
        console.log(user);
        this.product.user_info_id = user.user_info_id; // Assign username as addedBy

        // Directly use Axios to send the product info to the API
        const response = await axios.post(
          "products/createProduct",
          this.product
        );
        console.log(response.data);
        // Reset form fields after successful submission
        this.product = {
          product_name: "",
          price: "",
          product_category: "",
          description: "",
          files: null,
          image_name: null,
          user_info_id: null,
        };
        // Emit an event to refresh products after adding
        this.$emit("reload-products");
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
    // async submitProduct() {
    //   try {
    //     const user = JSON.parse(localStorage.getItem('user')); // Get logged-in user from local storage
    //     this.productInfo.user_id= user.user_id; // Assign username as addedBy

    //     const response = await axios.post('http://localhost:3000/products/createProduct', this.productInfo);
    //     console.log(response.data);
    //     // Reset form fields after successful submission
    //     this.productInfo = {
    //       product_name: '',
    //       price: '',
    //       category: '',
    //       desc: '',
    //       photo: null
    //     };
    //     // Refresh products after adding
    //     this.$emit('reload-products');
    //   } catch (error) {
    //     console.error('Error adding product:', error);
    //   }
    // },
    // submitProduct() {
    //   this.$emit('add-product', this.productInfo);
    //   this.productInfo = {
    //     product_name: '',
    //     price: '',
    //     category: '',
    //     descr: '',
    //     photo: null
    //   };
    // },

    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.product.files = e.target.result;
        };
        reader.readAsDataURL(file);
        console.log(image);
      } else {
        this.product.files = null;
      }
    },
    // Implement editProduct method similarly
  },
};
</script>

<style></style>
