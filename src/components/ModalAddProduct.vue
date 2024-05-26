<template>
  <div>
    <div class="modal fade bd-example-modal-lg" id="ModalAddProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content bg-white rounded-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6">
                <form @submit.prevent="submitProduct">
                  <div class="form-group mb-3">
                    <label for="productName">Product Name</label>
                    <input type="text" class="form-control" v-model="productInfo.productName" placeholder="Enter product name" required />
                  </div>
                  <div class="form-group mb-3">
                    <label for="price">Price</label>
                    <input type="number" class="form-control" v-model="productInfo.price" placeholder="Enter price" required />
                  </div>
                  <div class="form-group mb-3">
                    <label for="category">Category</label>
                    <select class="form-control" v-model="productInfo.category" required>
                      <option>Fruits</option>
                      <option>Vegetables</option>
                      <option>Meats</option>
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <label for="description">Product Description</label>
                    <textarea class="form-control" v-model="productInfo.description" rows="3" placeholder="Enter product description" required></textarea>
                  </div>
                  <div class="form-group mb-3">
                    <label for="photoUpload">Upload Photo</label>
                    <input type="file" class="form-control-file" id="photoUpload" @change="previewImage" required />
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
                          <img v-if="productInfo.photo" :src="productInfo.photo" alt="Uploaded Photo" class="img-fluid" />
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="submitProduct">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productInfo: {
        product_name: '',
        price: '',
        category: '',
        desc: '',
        photo: null
      }
    };
  },
  methods: {
    async submitProduct() {
      try {
        const user = JSON.parse(localStorage.getItem('user')); // Get logged-in user from local storage
        this.productInfo.addedBy = user.user_info_id; // Assign username as addedBy

        const response = await axios.post('http://localhost:3000/products/createProduct/products/createProduct', this.productInfo);
        console.log(response.data);
        // Reset form fields after successful submission
        this.productInfo = {
          product_name: '',
          price: '',
          category: '',
          desc: '',
          photo: null
        };
        // Refresh products after adding
        this.$emit('reload-products');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    submitProduct() {
      this.$emit('add-product', this.productInfo);
      this.productInfo = {
        product_name: '',
        price: '',
        category: '',
        descr: '',
        photo: null
      };
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.productInfo.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.productInfo.photo = null;
      }
    }
    // Implement editProduct method similarly
  }
};
</script>

<style></style>
