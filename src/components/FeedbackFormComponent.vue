<template>
  <v-row
    ><v-col cols="12"
      ><form @submit.prevent="sendFeedback">
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
            v-model="feedBack"
            required
            color="orange"
            label="Текст отзыва"
          ></v-text-field>
        </div>
        <v-btn type="submit" color="orange" text>Отправить отзыв</v-btn>
      </form></v-col
    ></v-row
  >
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    feedBack: "",
  }),
  props: ["id"],
  methods: {
    sendFeedback() {
      this.$store.dispatch("addToFeedbacks", {
        username: this.firstname,
        text: this.feedBack,
        itemID: this.id,
      });
    },
  },
};
</script>
