<template>
  <div>
    <h1 class="main-title">Топ продаж</h1>
    <v-row class="flex">
      <ProductCardComponent
        v-for="product in this.$store.getters.getTopProducts"
        v-bind:product="product"
        v-bind:key="product.id"
      ></ProductCardComponent>
    </v-row>
  </div>
</template>
<script>
import ProductCardComponent from "./ProductCardComponent.vue";
export default {
  data: () => ({
    products: [],
  }),
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  components: { ProductCardComponent },
};
</script>

<style>
.main-title {
  margin: 20px 10px;
}
</style>
