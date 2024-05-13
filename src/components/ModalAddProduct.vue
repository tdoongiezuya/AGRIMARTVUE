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
                <form>
                  <div class="form-group mb-3">
                    <label for="productName">Product Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="productName"
                      placeholder="Enter product name"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="price">Price</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="Enter price"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="category">Category</label>
                    <select class="form-control" id="category">
                      <option>Fruits</option>
                      <option>Vegetables</option>
                      <option>Meats</option>
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <label for="description">Product Description</label>
                    <textarea
                      class="form-control"
                      id="description"
                      rows="3"
                      placeholder="Enter product description"
                    ></textarea>
                  </div>
                  <div class="form-group mb-3">
                    <label for="photoUpload">Upload Photo</label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="photoUpload"
                      @change="previewImage"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary float-right"
                  >
                    Submit
                  </button>
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
                            v-if="imagePreview"
                            :src="imagePreview"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePreview: null
    };
  },
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imagePreview = null;
      }
    }
  }
};
</script>

<style></style>
