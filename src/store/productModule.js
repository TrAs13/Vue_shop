import axios from "axios";

export default {
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  getters: {
    getAllProducts(state) {
      return state.products.sort((a, b) => a.id - b.id);
    },
    getTopProducts(state) {
      return state.products
        .sort((a, b) => b.rating.count - a.rating.count)
        .slice(0, 4);
    },
    getProductsInCart(state) {
      let keys = Object.keys(localStorage);

      return state.products.filter(
        (item) => keys.indexOf(item.id.toString()) != -1
      );
    },
  },
  actions: {
    fetchProducts(ctx) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => ctx.commit("setProducts", response.data));
    },
  },
};
