import axios from 'axios';
export default {
    state: {
        products: [],
        
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
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
        // async fetchAllProducts({ commit }) {
        //     await axios.get('http://localhost:3000/products/getProduct')
        //         .then(res => {
        //             commit('SET_PRODUCTS', res.data.products)
                    
        //         })
        // }
    },
    getters: {
        getProducts(state) {
            console.log('State after committing mutations:', {
                products: state.products,
            });
            return state.products
        },
    },
}