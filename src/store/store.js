import { createStore, createLogger } from 'vuex';
import productStore from './modules/productStore';
import auth from './modules/auth';
const store = createStore({
  modules: {
    auth,
    productStore,
  },
  plugins: [createLogger()]
});

export default store;