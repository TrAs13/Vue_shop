<template>
  <v-row class="mt-4"
    ><v-col cols="12" md="6">
      <v-card class="mt-1" v-for="fb in feedbacks" v-bind:key="fb.username">
        <v-card-title>{{ fb.username }}</v-card-title>
        <v-card-subtitle>{{ fb.text }}</v-card-subtitle>
      </v-card></v-col
    ><v-col cols="12" md="6"
      ><FeedbackFormComponent
        v-bind:id="product.id"
      ></FeedbackFormComponent></v-col></v-row
></template>
<script>
import FeedbackFormComponent from "./FeedbackFormComponent.vue";
export default {
  data() {
    return {
      product: {},
    };
  },
  components: { FeedbackFormComponent },
  props: ["id"],
  mounted() {
    this.product = this.$store.getters.getAllProducts.filter(
      (product) => product.id == this.id
    )[0];
  },
  computed: {
    feedbacks() {
      return this.$store.getters.getFeedbacksItems.filter(
        (item) => item.itemID == this.product.id
      );
    },
  },
};
</script>
