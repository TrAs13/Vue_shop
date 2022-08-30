<template>
  <div>
    <v-row class="flex justify-space-between align-center">
      <h1 class="main-title">Ваша корзина</h1>
      <v-dialog transition="dialog-top-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" color="orange lighten-2" text>
            Подтвердить заказ
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="orange" dark>Заполните данные</v-toolbar>
            <v-card-text>
              <v-row
                ><v-col cols="12"
                  ><form
                    @submit.prevent="
                      confirmOrder();
                      dialog.value = false;
                    "
                  >
                    <div class="mb-3">
                      <v-text-field
                        v-model="firstname"
                        required
                        color="orange"
                        label="ФИО"
                      ></v-text-field>
                    </div>
                    <div class="mb-3">
                      <v-text-field
                        v-model="phone"
                        required
                        type="tel"
                        color="orange"
                        label="Номер телефона"
                      ></v-text-field>
                    </div>
                    <div class="mb-3">
                      <v-text-field
                        v-model="address"
                        required
                        color="orange"
                        label="Адрес"
                      ></v-text-field>
                    </div>
                    <div class="mb-3">
                      <v-text-field
                        v-model="city"
                        required
                        color="orange"
                        label="Город"
                      ></v-text-field>
                    </div>
                    <v-card-actions class="justify-end">
                      <v-btn
                        color="orange lighten-2"
                        text
                        @click="dialog.value = false"
                        >Отмена</v-btn
                      >
                      <v-btn type="submit" color="orange lighten-2" text>
                        Подтвердить заказ
                      </v-btn>
                    </v-card-actions>
                  </form></v-col
                ></v-row
              >
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
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
  data: () => ({
    valid: false,
    firstname: "",
    phone: "",
    address: "",
    city: "",
  }),
  components: { CartCardComponent },
  methods: {
    confirmOrder() {
      this.$store.dispatch("deleteCartItems");
      console.log(this.$store.getters.getCartItems);
      localStorage.removeItem("vue_shop_cart");
      this.$router.push({ path: "/order_success" });
    },
    async sendOrderToServer() {
      // await post(this.firstname,this.phone,this.address,this.city)
    },
  },
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
