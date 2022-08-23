<template
  ><div class="product">
    <v-card width="768"
      ><SliderActionComponent
        v-bind:items="[product.image]"
      ></SliderActionComponent
    ></v-card>
    <v-card width="468" height="200">
      <v-card-title>Цена: {{ product.price }}$</v-card-title>
      <v-text-field width="100">
        <v-icon slot="append" color="red">
          mdi-plus
        </v-icon>
        <v-icon slot="prepend" color="green">
          mdi-minus
        </v-icon>
      </v-text-field>
      <v-btn color="orange lighten-2" text>Купить</v-btn>
    </v-card>
  </div></template
>
<script>
import SliderActionComponent from "@/components/SliderActionComponent.vue";
export default {
  props: {
    product: {},
  },
  components: { SliderActionComponent },
};
</script>
