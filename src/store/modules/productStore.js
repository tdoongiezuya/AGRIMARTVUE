import axios from 'axios';
import router from '../../router';``
export default {
    state: {
        products: [],
        product: null,
        // product: {
        //     product_id:null, 
        //     product_name: null,
        //     description: null,
        //     price: null,
        //     product_category: null,
        //     user_info_id: null
        // }
        cartItems: [],
        cartitemCount: null,

    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_PRODUCT(state, product) {
            state.product = product;
        },
        // addToCart(state, payload) {
        //     let item = payload;
        //     item = {...item, quantity:1}
        //     if  (state.cartItems.length > 0) {
        //         let bool = state.cartItems.some(i => i.id == item.id)
        //         if (bool){
        //             let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
        //             state.cartItems[itemIndex]["quantity"] += 1;
        //         } else {
        //             state.cartItems.push(item)
        //         }
        //         state.cartItemCount++
        //     }
        // }
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
        async fetchProduct({ commit }, { product_id } ){
            try {
                const response = await axios.get(`http://localhost:3000/products/getProductById/${product_id}`);
                commit('SET_PRODUCT', response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
                // Handle the error appropriately
            }
        },
        addtoCart ({commit}, {product, quantity}) {
            commit('ADD_TO_CART', {product, quantity} )
        }
    },
    getters: {
        getProducts(state) {
            console.log('State after committing mutations:', {
                products: state.products,
            });
            return state.products
        },
        getProduct(state) {
            console.log('State after committing mutations:', {
                product: state.product,
            });
            return state.product;
        },
    },
}