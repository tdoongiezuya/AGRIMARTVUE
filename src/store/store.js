import { createStore } from 'vuex';
import productStore from './modules/productStore';

const store = createStore({
  modules: {
    productStore,
  },
});

export default store;