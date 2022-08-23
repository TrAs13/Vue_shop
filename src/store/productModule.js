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
      return state.products;
    },
    getTopProducts(state) {
      return state.products
        .sort((a, b) => b.rating.count - a.rating.count)
        .slice(0, 4);
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
