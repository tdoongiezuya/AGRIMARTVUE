import axios from 'axios';
import router from '../../router';
export default {
  state: {
    token: null,
    user: null,
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

  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user: (state) => {
      return state.user
    }
  },
}