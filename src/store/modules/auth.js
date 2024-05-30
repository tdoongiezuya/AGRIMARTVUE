import axios from 'axios';
import router from '../../router';
export default {
  
  state: {
    token: null,
    user: {
      user_info_id:null,
      username: null,
      first_name: null,
      last_name: null,
      email: null,
      user_level: null
    },
    userInfo: {},
    address:{}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setUserLevel(state, user_level) {
      state.user.user_level = user_level;
    },
    initStateFromLocalStorage(state) {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      if (token) {
        state.token = token;
      }
      if (user) {
        state.user = user;
      }
    }
  },
  actions: {
    async commitSignin({ commit }, form) {
      console.log('signin action triggered', form); 
      try {
        const response = await axios.post('auth/login', form);
        const { token, user } = response.data;
        console.log(response);
        commit('setUser', user);
        commit('setToken', token);
        const user_info = JSON.stringify(user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', user_info);
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
    logout({ commit }) {
      commit('setToken', null);
      commit('setUser', null);
      
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      router.push({name:"Signin"});
    
    } ,
    initStore({ commit }) {
      commit('initStateFromLocalStorage');
    }

  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user: (state) => {
      return state.user
      
    },
    userId: (state) => {
      return state.user.user_id
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
