export default {
  state: {
    feedbacksItems: [
      {
        username: "Иванов Иван Иванович",
        text: "Крутой товар",
        itemID: 17,
      },
      {
        username: "Кузнецов Иван Иванович",
        text: "Плохой товар",
        itemID: 17,
      },
    ],
  },
  mutations: {
    setFeedbacksItems(state, payload) {
      state.feedbacksItems.push(payload);
    },
  },
  getters: {
    getFeedbacksItems(state) {
      return state.feedbacksItems;
    },
  },
  actions: {
    addToFeedbacks(ctx, params) {
      ctx.commit("setFeedbacksItems", params);
    },
  },
};
