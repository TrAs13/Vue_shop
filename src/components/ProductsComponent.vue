<template>
  <div>
    <h1 class="main-title">Товары</h1>
    <v-row class="flex">
      <ProductCardComponent
        v-for="product in this.$store.getters.getAllProducts"
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

<style scoped></style>
