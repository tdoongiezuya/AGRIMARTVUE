import axios from 'axios';
import router from '../../router';
export default {
    state: {
        products: [],
        product: {
            image_data: null,
            product_name: null,
            product_category: null,
            price : null,
            description: null,    
            user_info_id: null,
          },
        cartItems: [],
        cart: [],
        cartitemCount: null,
        isLoading: false,

    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_PRODUCT(state, product) {
            state.product = product;
        },
        ADD_TO_CART(state, {product, quantity}) {
            let existingProduct = state.cart.find(cartItem => {
              return  cartItem.product.product_id === product.product_id;
            });
            if (existingProduct) {
                existingProduct.quantity += quantity;
                return;
            }
                state.cart.push({ product, quantity });
            
        },
        
    },
    actions: {
        async fetchAllProducts({ commit }) {
            try {
                const response = await axios.get('http://localhost:3000/products/getProduct');
                commit('SET_PRODUCTS', response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Handle the error appropriately, e.g., show a message to the user
            }
        },
    async fetchProduct({ commit, state }, {productId}) {
            try {
              state.isLoading = true; // Set loading to true before fetching
              const response = await axios.get(`http://localhost:3000/products/getProductById/${productId}`);
              commit('SET_PRODUCT', response.data);
              state.isLoading = false; // Set loading to false after fetching
            } catch (error) {
              console.error('Error fetching product:', error);
              state.isLoading = false; // Ensure loading is set to false in case of error
            }
          },
        // async fetchProduct({ commit },product_id){
        //     try {
        //         const response = await axios.get(`http://localhost:3000/products/getProductById/${product_id}`);
        //         commit('SET_PRODUCT', response.data);
                
        //     } catch (error) {
        //         console.error('Error fetching product:', error);
        //         // Handle the error appropriately
        //     }
        // },
        addProductToCart({ commit }, { product , quantity} ) {
            commit('ADD_TO_CART',{ product , quantity} );
        },
    },
    
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    },
    getCart(state) {
      return state.cart;
    },
  },
};