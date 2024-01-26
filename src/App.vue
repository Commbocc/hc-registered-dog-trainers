<script setup lang="ts">
import { businesses, fetchBusinesses } from "./lib/businesses";
import { fetchTrainers } from "./lib/trainers";
import Business from "./components/Business.vue";

fetchBusinesses();
fetchTrainers();

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid pt-2";
</script>

<template>
  <div v-if="businesses.loading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <article v-else :class="containerClass">
    <template v-for="(biz, i) in businesses.data">
      <Business :biz="biz" />
    </template>
  </article>
</template>
