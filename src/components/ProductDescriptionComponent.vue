<template
  ><div>{{ product.description }}</div></template
>
<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  props: ["id"],
  mounted() {
    this.product = this.$store.getters.getAllProducts.filter(
      (product) => product.id == this.id
    )[0];
  },
};
</script>
