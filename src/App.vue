<template>
  <v-app>
    <v-container fluid>
      <HeaderComponent></HeaderComponent>
      <router-view></router-view>
      <FooterComponent></FooterComponent>
    </v-container>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",

  components: { HeaderComponent, FooterComponent },

  data: () => ({
    //
  }),
};
</script>

<style>
.container {
  padding: 0 0 60px 0;
}
</style>
