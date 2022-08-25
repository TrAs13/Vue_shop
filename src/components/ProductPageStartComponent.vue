<template
  ><div class="product">
    <v-card width="768"
      ><SliderActionComponent
        v-bind:items="[product.image]"
      ></SliderActionComponent
    ></v-card>
    <v-card width="468" height="200">
      <v-row class="flex"
        ><v-card-title>Цена: {{ product.price }}$</v-card-title></v-row
      >
      <v-row class="flex"
        ><v-btn @click="decCount"
          ><v-icon x-large color="orange">mdi-minus</v-icon></v-btn
        >
        <input v-model="counter" />
        <v-btn @click="incCount"
          ><v-icon x-large color="orange">mdi-plus</v-icon></v-btn
        ></v-row
      >
      <v-row class="flex"
        ><v-btn @click="addToCart" color="orange lighten-2" text
          >Купить</v-btn
        ></v-row
      >
    </v-card>
  </div></template
>
<script>
import SliderActionComponent from "@/components/SliderActionComponent.vue";
export default {
  props: {
    product: {},
  },
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    incCount() {
      this.counter++;
    },
    decCount() {
      this.counter--;
    },
    addToCart() {
      localStorage.setItem(
        this.product.id,
        +localStorage.getItem(this.product.id) + this.counter
      );
      if (localStorage.getItem(this.product.id) <= 0)
        localStorage.removeItem(this.product.id);
      this.$store.dispatch("addToCart", [this.product.id, this.counter]);
      this.counter = 1;
    },
  },
  components: { SliderActionComponent },
};
</script>

<style scoped>
.v-input {
  max-width: 100px;
}
.v-text-field {
  padding: 0;
}
input {
  text-align: center;
  outline: none;
  border: 2px solid orange;
  border-radius: 3px;
}
.flex {
  justify-content: center;
  margin-bottom: 30px;
}
</style>
