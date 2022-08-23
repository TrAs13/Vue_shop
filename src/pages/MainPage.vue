<template
  ><div>
    <SliderActionComponent
      v-bind:items="this.$store.getters.getAllStoks"
    ></SliderActionComponent>
    <ProductsComponent></ProductsComponent>
    <ProductsTopComponent></ProductsTopComponent>
    <NewsComponent></NewsComponent></div
></template>
<script>
import SliderActionComponent from "@/components/SliderActionComponent.vue";
import ProductsComponent from "@/components/ProductsComponent.vue";
import ProductsTopComponent from "../components/ProductsTopComponent.vue";
import NewsComponent from "../components/NewsComponent.vue";
export default {
  components: {
    SliderActionComponent,
    ProductsComponent,
    ProductsTopComponent,
    NewsComponent,
  },
};
</script>
