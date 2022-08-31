<template
  ><div>
    <v-select
      @change="onChange()"
      :items="items"
      v-model="category"
      label="Выберите категорию"
      dense
      solo
    ></v-select>
    <v-row class="flex">
      <ProductCardComponent
        v-for="product in productItems"
        v-bind:product="product"
        v-bind:key="product.id"
      ></ProductCardComponent>
    </v-row>
    <v-row class="flex justify-center">
      <v-pagination v-model="page" :length="maxPages"></v-pagination>
    </v-row></div
></template>
<script>
import ProductCardComponent from "../components/ProductCardComponent.vue";
export default {
  data() {
    return {
      items: [],
      category: "all",
      page: 1,
    };
  },
  mounted() {
    let set = new Set();
    let arr = this.$store.getters.getAllProducts;
    for (let i = 0; i < arr.length; i++) {
      set.add(arr[i].category);
    }
    this.items = ["all", ...set];
  },
  computed: {
    productItems() {
      return this.$store.getters.getAllProducts
        .filter(
          (item) => item.category == this.category || this.category == "all"
        )
        .slice(
          this.page * this.limitProduct - this.limitProduct,
          this.page * this.limitProduct
        );
    },
    limitProduct() {
      if (document.documentElement.clientWidth > 1740) return 5;
      else if (document.documentElement.clientWidth > 1400) return 4;
      else if (document.documentElement.clientWidth > 700) return 6;
      else return 5;
    },
    maxPages() {
      let len =
        this.$store.getters.getAllProducts.filter(
          (item) => item.category == this.category || this.category == "all"
        ).length / this.limitProduct;
      return Math.ceil(len);
    },
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
    onChange() {
      this.page = 1;
    },
  },
  components: { ProductCardComponent },
};
</script>
