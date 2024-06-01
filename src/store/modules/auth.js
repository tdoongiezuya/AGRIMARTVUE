import axios from 'axios';
import router from '../../router';
export default {

  state: {
    token: null,
    user: {
      user_info_id: null,
      username: null,
      first_name: null,
      last_name: null,
      email: null,
      user_level: null,
      address_line: null,
      city: null,
      mobile: null

    },
  
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
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setUserAddress(state, address) {
      state.address = address;
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
    async commitSignin({ commit, dispatch }, form) {
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

        

        router.push({ name: 'Home' });

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
      router.push({ name: "Signin" });

    },
    initStore({ commit }) {
      commit('initStateFromLocalStorage');
    },
    async fetchAddress({ commit, state }) {
      try {
        // Ensure user_info_id is available and valid
        if (!state.user.user_info_id) {
          throw new Error('user_info_id is missing');
        }

        // Construct the URL with the user_info_id
        const url = `address/get/${state.user.user_info_id}`;

        // Make the GET request
        const response = await axios.get(url);

        // Extract the address from the response
        const { address } = response.data;

        // Commit the address to the state
        commit('setUserAddress', address);
      } catch (error) {
        console.error("Error fetching address:", error.message);
        // Optionally, display an error message to the user
        // This could involve dispatching another action to update the UI accordingly
      }
    },
    // async fetchAddress({ commit, state }) {
    //   try {
    //     // Assuming you have a way to get the current user's user_info_id from the state
    //     const user_info_id = state.user.user_info_id; // Adjust this line based on where you actually store the user_info_id

    //     // Call the backend endpoint to fetch user info and address
    //     const response = await axios.get(`address/get/${user_info_id}`); // Adjust the URL path according to your API structure
    //     const { address } = response.data;

    //     // Update the state with the fetched user info and addres
    //     commit('setUserAddress', address);
    //   } catch (error) {
    //     console.error("Error fetching address:", error);
    //     // Optionally handle the error, e.g., show a message to the user
    //   }
    // },
  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user: (state) => {
      return state.user

    },
    userInfo: (state) => {
      return state.userInfo
    },
    address: (state) => {
      return state.address
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
