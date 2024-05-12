import axios from 'axios';
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
      } catch (error) {
        console.error("Error logging in:", error);
        // Handle error appropriately
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