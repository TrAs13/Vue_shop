export default {
  state: {
    news: [
      {
        title: "Мы закрылись",
        description: "Мы закрылись(",
        Date: "2012-04-23",
      },
      {
        title: "Мы открылись",
        description: "Мы открылись",
        Date: "2012-04-01",
      },
    ],
  },
  getters: {
    getAllNews(state) {
      return state.news;
    },
  },
};
