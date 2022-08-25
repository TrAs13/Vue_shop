<template>
  <div>
    <h1 class="main-title">Товары</h1>
    <v-row class="flex">
      <ProductCardComponent
        v-for="product in productItems"
        v-bind:product="product"
        v-bind:key="product.id"
      ></ProductCardComponent>
    </v-row>
    <v-row class="flex"
      ><v-btn
        color="orange lighten-2"
        text
        class="mx-auto"
        @click="loadMoreProducts"
        v-if="productItems.length < this.$store.getters.getAllProducts.length"
        >Посмотреть еще</v-btn
      ></v-row
    >
  </div>
</template>
<script>
import ProductCardComponent from "./ProductCardComponent.vue";
export default {
  data: () => ({
    products: [],
    counter: 1,
  }),
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.counter = 1;
  },
  computed: {
    productItems() {
      return this.$store.getters.getAllProducts.slice(
        0,
        this.limitProduct * this.counter
      );
    },
    limitProduct() {
      if (document.documentElement.clientWidth > 1740) return 5;
      else if (document.documentElement.clientWidth > 1400) return 4;
      else if (document.documentElement.clientWidth > 700) return 6;
      else return 5;
    },
  },
  methods: {
    loadMoreProducts() {
      this.counter++;
    },
  },
  components: { ProductCardComponent },
};
</script>

<style scoped></style>
