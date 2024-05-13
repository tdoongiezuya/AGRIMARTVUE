import axios from 'axios';
import router from '../../router';
export default {
  state: {
    token: null,
    user: {
      id:null,
      username: null,
      last_name: null,
      email: null,
      user_level: null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    
  },
  actions: {
    async commitSignin({ commit }, form) {
      console.log('signin action triggered', form); 
      try {
        const response = await axios.post('http://localhost:3000/auth/login', form);
        const { token, user } = response.data;
        console.log(response);
        commit('setUser', user);
        commit('setToken', token);
        localStorage.setItem('token', token);
        router.push({name: 'Home'});
        
        console.log('State after committing mutations:', {
          token: this.state.token,
          user: this.state.user,
        });
        swal({
          text: "Login successful. Please continue",
          icon: "success",
        });
      } catch (error) {
        console.error("Error logging in:", error);
        // Handle error appropriately
        swal({
          text: "Unable to Log you in!",
          icon: "error",
          closeOnClickOutside: false,
        });
      }
    },
    logout({ commit }) {
      commit('setToken', null);
      commit('setUser', null);
  }

  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user: (state) => {
      return state.user
      
    },
    user_level: (state) => {
      return state.user.user_level
    },
    first_name: (state) => {
      return state.user.first_name
    },
    last_name: (state) => {
      return state.user.last_name
    },
  },
}
// async fetchAllProducts({ commit }) {
//   try{
//       const res = await axios.get('http://localhost:3000/products/getProduct');
//       const { products } = res.data;
//       commit('SET_PRODUCTS', products)
      
//   }  catch (error) {
//       console.error("Error fetching products:", error);
//   }

// }
// getProducts(state) {
//   console.log('State after committing mutations:', {
//       products: state.products,
//   });
//   return state.products
// },