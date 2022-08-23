<script setup lang="ts">
const props = defineProps<{ trainer: Trainer }>();
</script>

<template>
  <div class="list-group-item">
    <div class="d-flex w-100 justify-content-between align-items-center">
      <h5 class="mb-1">{{ trainer.fields.Name }}</h5>

      <a
        v-if="trainer.fields.Phone"
        :href="`tel:${trainer.fields.Phone}`"
        class="text-muted small text-decoration-none text-nowrap"
        >{{ trainer.fields.Phone }}</a
      >
    </div>

    <p v-if="trainer.fields.Location" class="mb-1">
      {{ trainer.fields.Location }}
    </p>

    <small v-if="trainer.fields.Services" class="text-muted">{{
      trainer.fields.Services
    }}</small>
  </div>
</template>
