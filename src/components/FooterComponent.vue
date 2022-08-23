<template>
  <v-footer absolute class="black">
    <v-card flat tile width="100%" class="black lighten-1 text-center">
      <v-card-text class="white--text">
        <strong>Ru, Mordovia, Voroshilova 5</strong> <v-spacer />{{
          new Date().getFullYear()
        }}
        — <strong>VUE-SHOP</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
.v-footer {
  padding: 0;
}
</style>
