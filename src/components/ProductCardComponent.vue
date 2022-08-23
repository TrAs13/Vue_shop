<template>
  <v-card class="mx-auto card" max-width="344">
    <v-img contain class="img" :src="product.image" height="200px"></v-img>
    <router-link
      :to="{
        name: 'productSpecifications',
        params: { id: product.id },
      }"
      ><v-card-title>
        {{ product.title }}
      </v-card-title></router-link
    >

    <v-card-actions class="card__actions">
      <v-card-title> {{ product.price }}$ </v-card-title>

      <v-spacer></v-spacer>

      <v-btn color="orange lighten-2" text>
        Купить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    product: {},
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.card {
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 60px;
}

.card__actions {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
