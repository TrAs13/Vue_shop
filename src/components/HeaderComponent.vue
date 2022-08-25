<template>
  <v-app-bar color="black accent-4" dense dark>
    <router-link :to="nav[0]" v-for="nav in navs" v-bind:key="nav[0]"
      ><div class="ml-3 white--text">{{ nav[1] }}</div></router-link
    >
    <v-spacer />
    <div class="mr-12">8 (999) 999-99-99</div>
    <router-link :to="'/cart'"
      ><v-btn class="mr-3"
        ><img class="market" src="../assets/market.svg" />
        <div class="counter">
          {{ this.$store.getters.getСartLength }}
        </div></v-btn
      ></router-link
    >
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
  mounted() {
    this.$store.dispatch("fetchCartItems");
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.mr-3 {
  position: relative;
}
.market {
  width: 32px;
  height: 32px;
}

.counter {
  position: absolute;
  background-color: red;
  border-radius: 50%;
  top: -8px;
  right: -24px;
  height: 24px;
  width: 24px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
