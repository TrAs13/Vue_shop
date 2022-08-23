<template
  ><div>
    <v-carousel v-model="model">
      <v-carousel-item v-for="item in items" :key="item">
        <v-img :src="item" contain></v-img>
      </v-carousel-item>
    </v-carousel></div
></template>

<script>
export default {
  props: {
    items: [],
  },
  data() {
    return {
      model: 0,
    };
  },
};
</script>
