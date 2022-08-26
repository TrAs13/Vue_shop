<template
  ><v-card class="overflow-hidden">
    <v-app-bar color="black" dark>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <router-link
            :to="{
              name: 'productSpecifications',
              params: { id: product.id },
            }"
            ><v-tab>Характеристики</v-tab></router-link
          >
          <router-link
            :to="{
              name: 'productDescription',
              params: { id: product.id },
            }"
            ><v-tab>Описание</v-tab></router-link
          >
          <router-link
            :to="{
              name: 'productFeedback',
              params: { id: product.id },
            }"
            ><v-tab>Отзывы</v-tab></router-link
          >
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="400"
    >
      <v-container style="height: 600px;">
        <router-view></router-view
      ></v-container>
    </v-sheet> </v-card
></template>
<script>
export default {
  props: {
    product: {},
    id: Number,
  },
};
</script>
<style scoped>
a {
  color: white !important;
  text-decoration: none !important;
}
</style>
