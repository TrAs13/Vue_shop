<template>
  <v-app-bar color="black accent-4" dense dark>
    <router-link :to="nav[0]" v-for="nav in navs" v-bind:key="nav[0]"
      ><div class="ml-3 white--text">{{ nav[1] }}</div></router-link
    >
    <v-spacer />
    <div class="mr-12">8 (999) 999-99-99</div>
    <v-btn class="mr-3"
      ><img class="market" src="../assets/market.png"
    /></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      navs: [
        ["/", "VUE-SHOP"],
        ["/category", "Категории"],
        ["/news", "Новости"],
        ["/about", "О нас"],
      ],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.market {
  width: 32px;
  height: 32px;
}
</style>
