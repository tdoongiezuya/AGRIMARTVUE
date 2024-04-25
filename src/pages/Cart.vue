<template>
  <div class="container-fluid pt-5">
    <div class="container-fluid py-5">
      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  <th scope="row">
                    <div class="d-flex align-items-center">
                      <img
                        :src="item.image"
                        class="img-fluid me-5 rounded-circle"
                        style="width: 80px; height: 80px"
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p class="mb-0 mt-4">{{ item.name }}</p>
                  </td>
                  <td>
                    <p class="mb-0 mt-4">{{ item.price }}</p>
                  </td>
                  <td>
                    <div class="input-group quantity mt-4" style="width: 100px">
                      <div class="input-group-btn">
                        <button
                          class="btn btn-sm btn-minus rounded-circle bg-light border"
                        >
                          <i class="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        class="form-control form-control-sm text-center border-0"
                        value="1"
                      />
                      <div class="input-group-btn"> 
                        <button
                          class="btn btn-sm btn-plus rounded-circle bg-light border"
                        >
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0 mt-4">{{ item.price * item.quantity }}</p>
                  </td>
                  <td>
                    <button
                      @click="removeItem"
                      class="btn btn-md rounded-circle bg-light border mt-4"
                    >
                      <i class="fa fa-times text-danger"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
      cartItem:[]
 
    };
  },
};
</script>

<style>
</style>
