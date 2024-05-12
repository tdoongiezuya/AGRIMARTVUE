export default ({ store }, inject) => {
    inject('router', store.$router);
  };