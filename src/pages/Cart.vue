<template>
  <div class="container-fluid pt-5">
    <HeaderVue />
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
                <CartCardVue/>
                <CartCardVue/>
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCardVue from "../components/CartCard.vue";
import HeaderVue from "../components/Header.vue";
export default {
  components: { CartCardVue },
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: "last_name",
          sortable: true,
        },
        {
          key: "first_name",
          sortable: false,
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          variant: "danger",
        },
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>

<style></style>
