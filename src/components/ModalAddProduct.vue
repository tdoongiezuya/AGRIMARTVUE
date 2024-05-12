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
          <div class="modal-body d-flex align-items-center">
            <div class="input-group w-75 mx-auto d-flex">
              <!-- Product Upload Section Start -->
              <div class="container-fluid py-5">
                <div class="container py-5">
                  <div class="row justify-content-center">
                    <div class="col-lg-6">
                      <h2 class="mb-4">Upload Product</h2>
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
                  </div>
                </div>
              </div>
              <!-- Product Upload Section End -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
