export default {
  state: {
    cartItems: {},
    cartLength: 0,
  },
  mutations: {
    setCartItems(state, payload) {
      state.cartItems = payload;
      let count = 0;
      for (let item in state.cartItems) count += +state.cartItems[item];
      state.cartLength = count;
    },
    addToCart(state, payload) {
      for (let item in payload) {
        if (payload[item] <= -1 * +state.cartItems[item]) {
          state.cartLength += -state.cartItems[item];
        } else state.cartLength += payload[item];
        state.cartItems[item] = (state.cartItems[item] || 0) + payload[item];
        if (state.cartItems[item] <= 0) state.cartItems[item] = 0;
      }
    },
  },
  getters: {
    getСartLength(state) {
      return state.cartLength;
    },
    getCartItems(state) {
      return state.cartItems;
    },
  },
  actions: {
    fetchCartItems(ctx) {
      let res = {};
      let keys = Object.keys(localStorage),
        i = keys.length;
      while (i--) {
        res[keys[i]] = +localStorage.getItem(keys[i]);
      }
      ctx.commit("setCartItems", res);
    },
    addToCart(ctx, params) {
      let res = {};
      res[params[0]] = params[1];
      ctx.commit("addToCart", res);
    },
  },
};
