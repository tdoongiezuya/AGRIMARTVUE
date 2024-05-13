import { createStore } from 'vuex';
import auth from './modules/auth';
import productStore from './modules/productStore';

const store = createStore({
    modules: {
        auth,
        productStore,
    },
    state() {
        
    },
    mutations: {
        
    },
});

export default store;