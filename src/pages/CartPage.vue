<template>
  <div>
    <v-row class="flex justify-space-between align-center">
      <h1 class="main-title">Ваша корзина</h1>
      <v-btn color="orange lighten-2" text>
        Подтвердить заказ
      </v-btn>
    </v-row>
    <div class="cards">
      <CartCardComponent
        v-for="product in this.$store.getters.getProductsInCart"
        v-bind:product="product"
        v-bind:key="product.id"
      ></CartCardComponent>
    </div>
  </div>
</template>
<script>
import CartCardComponent from "@/components/CartCardComponent.vue";
export default {
  components: { CartCardComponent },
};
</script>
<style scoped>
.cards {
  padding: 20px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}
.flex {
  padding: 10px;
}
</style>
