export default {
  state: {
    cartItems: [],
  },
  mutations: {
    setCartItems(state, payload) {
      state.cartItems = payload;
    },
    deleteCartItems(state) {
      state.cartItems = [];
    },
  },
  getters: {
    getСartLength(state) {
      let length = 0;
      for (let i = 0; i < state.cartItems.length; i++) {
        length += state.cartItems[i].count;
      }
      return length;
    },
    getCartItems(state) {
      return state.cartItems;
    },
  },
  actions: {
    fetchCartItems(ctx) {
      let items = JSON.parse(localStorage.getItem("vue_shop_cart")) || [];
      ctx.commit("setCartItems", items);
    },
    deleteCartItems(ctx) {
      ctx.commit("deleteCartItems");
    },
    addToCart(ctx, params) {
      let items = JSON.parse(localStorage.getItem("vue_shop_cart")) || [];
      let item = items.find((item) => item.id === params[0]);
      if (item) {
        item.count += params[1];
        if (item.count <= 0) {
          items.splice(items.indexOf((item) => item.id === params[0]) - 1, 1);
        }
      } else {
        if (params[1] > 0) items.push({ id: params[0], count: params[1] });
      }
      localStorage.setItem("vue_shop_cart", JSON.stringify(items));
      ctx.commit("setCartItems", items);
    },
  },
};
