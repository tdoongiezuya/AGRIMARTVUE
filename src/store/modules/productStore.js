import axios from 'axios';

export default {
  state: {
    products: [],
    product: null,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
  },
  actions: {
    async fetchAllProducts({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/products/getProduct');
        commit('SET_PRODUCTS', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchProduct({ commit }, product_id) {
      try {
        const response = await axios.get(`http://localhost:3000/products/getProductById/${product_id}`);
        commit('SET_PRODUCT', response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    },
  },
};