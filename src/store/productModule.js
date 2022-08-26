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
    getProductsInCart(state) {
      let items = JSON.parse(localStorage.getItem("vue_shop_cart")) || [];
      let res = [];
      for (let i = 0; i < state.products.length; i++) {
        for (let j = 0; j < items.length; j++) {
          if (state.products[i].id == items[j].id) {
            res.push(state.products[i]);
          }
        }
      }
      return res;
    },
  },
  actions: {
    async fetchProducts(ctx) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => ctx.commit("setProducts", response.data));
    },
  },
};
