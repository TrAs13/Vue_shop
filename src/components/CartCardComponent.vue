<template
  ><div class="cart-card">
    <div class="cart-card__img">
      <v-img contain :src="product.image" height="200px"></v-img>
    </div>
    <div class="cart-card__info">
      <router-link
        :to="{
          name: 'productSpecifications',
          params: { id: product.id },
        }"
        ><v-card-title>
          {{ product.title }}
        </v-card-title></router-link
      >
      <v-row class="flex"
        ><v-btn @click="decCount"
          ><v-icon x-large color="orange">mdi-minus</v-icon></v-btn
        >
        <input v-model="count" />
        <v-btn @click="incCount"
          ><v-icon x-large color="orange">mdi-plus</v-icon></v-btn
        ></v-row
      >
      <v-card-actions class="card__actions">
        <v-card-title> {{ (product.price * count).toFixed(2) }}$ </v-card-title>
        <v-spacer></v-spacer>
        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="orange lighten-2" text>
              Удалить
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="orange" dark>Подтвердите действие</v-toolbar>
              <v-card-text>
                <div class="text-h4 pa-12">
                  Вы хотите удалить данный товар из корзины?
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  color="orange lighten-2"
                  text
                  @click="dialog.value = false"
                  >Отмена</v-btn
                >
                <v-btn color="orange lighten-2" text @click="removeFromCart"
                  >Удалить</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-card-actions>
    </div>
  </div></template
>
<script>
export default {
  props: {
    product: {},
  },
  methods: {
    incCount() {
      this.$store.dispatch("addToCart", [this.product.id, 1]);
    },
    decCount() {
      if (this.count == 1) {
        this.removeFromCart();
      } else {
        this.$store.dispatch("addToCart", [this.product.id, -1]);
      }
    },
    removeFromCart() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
      localStorage.removeItem(this.product.id);
      this.$store.dispatch("addToCart", [this.product.id, -100000000]);
    },
  },
  computed: {
    count() {
      return this.$store.getters.getCartItems.find(
        (item) => item.id === this.product.id
      ).count;
    },
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none !important;
}

.cart-card {
  border: 2px solid orange;
  margin-bottom: 30px;
  width: 40%;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.cart-card__img {
  width: 25%;
}

.cart-card__info {
  margin-right: 20px;
}

input {
  max-width: 70px !important;
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
  max-width: 500px;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
