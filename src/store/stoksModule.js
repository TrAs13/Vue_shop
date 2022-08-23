export default {
  state: {
    stoks: [
      "https://loviden.ru/gallery/%D0%B0-ts1568870896.jpg",
      "https://festmall.ru/wp-content/uploads/2015/11/2553_32-e1448356395822.jpg",
    ],
  },
  getters: {
    getAllStoks(state) {
      return state.stoks;
    },
  },
};
