import axios from 'axios';
export default {
    state: {
        products: [],
        product:null,
        // product: {
        //     product_id:null, 
        //     product_name: null,
        //     description: null,
        //     price: null,
        //     product_category: null,
        //     user_info_id: null
        // }
        
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
                // Handle the error appropriately, e.g., show a message to the user
            }
        },
        async fetchProduct({ commit }, product_id) {
            try {
                const response = await axios.get(`http://localhost:3000/products/getProductById/${product_id}`);
                commit('SET_PRODUCT', response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching products:', error);
                // Handle the error appropriately, e.g., show a message to the user
            }
        },
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
            const product = state.product.find(p => p.product_id === productId);
            return product;
        },
    },
}