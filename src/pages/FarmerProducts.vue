<template>
  <div class="container-fluid pt-5">
    <Header />
    <modal-add-product @add-product="addProduct" />
    <div class="card">
      <div class="row">
        <div class="col cart">
          <div class="title">
            <div class="row p-3">
              <div class="col-lg-11 col-md-10 col-sm-9">
                <h4><b>My Products</b></h4>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 d-flex align-items-center justify-content-end">
                <button class="btn border-2 border-secondary rounded-pill py-1 px-3 text-primary"
                        data-bs-toggle="modal" data-bs-target="#ModalAddProduct"> Add
                </button>
              </div>
            </div>
          </div>
          <MDBTable class="align-middle mb-0 bg-white px-2" variant="light" responsive bordered>
            <thead class="bg-light">
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td>
                  <div class="d-flex align-items-center">
                    <img v-if="product.photo" :src="product.photo" alt="PRODUCT" class="product-image" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">{{ product.productName }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">{{ product.price }}</p>
                </td>
                <td>{{ product.category }}</td>
                <td>{{ product.description }}</td>
                <td>
                  <button class="btn border-2 border-secondary rounded-pill py-1 px-3 text-primary h-50" @click="editProduct({...product, product_id: product.id })">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </MDBTable>
          <div v-if="loading" class="text-center">
            <div v-if="loading" class="text-center">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Editing Product -->
    <div class="modal fade" id="editProductModal" tabindex="-1" role="dialog" aria-labelledby="editProductModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct">
              <div class="form-group mb-3">
                <label for="editProductName">Product Name</label>
                <input type="text" class="form-control" v-model="editingProduct.productName" id="editProductName" required>
              </div>
              <div class="form-group mb-3">
                <label for="editPrice">Price</label>
                <input type="number" class="form-control" v-model="editingProduct.price" id="editPrice" required>
              </div>
              <div class="form-group mb-3">
                <label for="editCategory">Category</label>
                <select class="form-control" v-model="editingProduct.category" id="editCategory" required>
                  <option>Fruits</option>
                  <option>Vegetables</option>
                  <option>Meats</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="editDescription">Description</label>
                <textarea class="form-control" v-model="editingProduct.description" id="editDescription" rows="3" required></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MDBTable } from "mdb-vue-ui-kit";
import Header from "../components/Header.vue";
import ModalAddProduct from '../components/ModalAddProduct.vue';
import axios from 'axios';

export default {
  components: {
    MDBTable,
    Header,
    ModalAddProduct,
  },
  data() {
    return {
      products: [],
      editingProduct: {
        product_id: '',
        productName: '',
        price: '',
        category: '',
        description: '',
        photo: null
      },
      loading: false // Added loading state
    };
  },
  methods: {
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
    editProduct(product) {
      // Create a deep copy of the product to avoid direct mutation
      this.editingProduct = JSON.parse(JSON.stringify(product));
      $('#editProductModal').modal('show');
    },
    updateProduct() {
      // Close the modal
      $('#editProductModal').modal('hide');

      // Construct the URL with the product ID
      const url = `/products/updateProduct/${this.editingProduct.product_id}`;

      // Prepare the product data to be sent to the backend
      const productToUpdate = {
        product_name: this.editingProduct.productName,
        price: this.editingProduct.price,
        product_category: this.editingProduct.category,
        description: this.editingProduct.description,
        photo: this.editingProduct.photo
      };

      // Send the update request to the backend
      axios.put(url, productToUpdate)
        .then(response => {
          // On success, find the product in the local products array and update it
          const index = this.products.findIndex(p => p.product_id === this.editingProduct.product_id);
          if (index !== -1) {
            // Replace the original product with the updated version
            this.products.splice(index, 1, {...this.editingProduct});
          }
        })
        .catch(error => {
          console.error('There was an error updating the product:', error);
        });
    },
    fetchProducts() {
      this.loading = true; // Start loading
      axios.get('/products/getProduct')
      .then(response => {
          this.products = response.data.map(product => ({
            product_id: product.id,
            productName: product.product_name, // Ensure this matches the backend response
            price: product.price,
            category: product.product_category, // Ensure this matches the backend response
            description: product.description,
            photo: product.photo
          }));
          this.loading = false; // End loading
        })
      .catch(error => {
          console.error('There was an error fetching the products:', error);
          this.loading = false; // Also end loading in case of error
        });
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.card {
  margin: auto;
  max-width: 80%;
  width: 100%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}

@media (max-width: 767px) {
  .card {
    margin: 3vh auto;
  }
}

.cart {
  background-color: #fff;
  padding: 4vh 5vh;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}
.product-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
</style>
