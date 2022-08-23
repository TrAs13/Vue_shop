<template>
  <div>
    <h1 class="main-title">Новости</h1>
    <v-list>
      <v-card
        fluid
        v-for="news in this.$store.getters.getAllNews"
        v-bind:key="news.Date"
      >
        <v-card-title>
          {{ news.title }}
        </v-card-title>
        <v-card-subtitle>{{ news.description }}</v-card-subtitle>
        <v-card-text>{{ news.Date }}</v-card-text>
      </v-card>
    </v-list>
  </div>
</template>
<script></script>
