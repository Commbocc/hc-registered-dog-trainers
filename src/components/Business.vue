<script setup lang="ts">
import { computed } from "vue";
import { breakpointsBootstrapV5, useBreakpoints } from "@vueuse/core";
import { trainers } from "../lib/trainers";
import Trainer from "./Trainer.vue";

const breakpoints = useBreakpoints(breakpointsBootstrapV5);

const smAndLarger = breakpoints.greater("sm");

const props = defineProps<{ biz: Business }>();

const bizTrainers = computed<Trainer[]>(() =>
  trainers.data.filter((t) => t.fields.Business?.includes(props.biz.id)),
);
</script>

<template>
  <div class="mb-3">
    <div class="d-flex w-100 justify-content-between align-items-sm-center">
      <h4 class="mb-1 me-1">
        {{ biz.fields.Name }}
      </h4>

      <a
        v-if="biz.fields.Phone"
        :href="`tel:${biz.fields.Phone}`"
        class="text-muted small text-decoration-none text-nowrap"
        >{{ biz.fields.Phone }}</a
      >
    </div>

    <p v-if="biz.fields.Location" class="mb-1">
      {{ biz.fields.Location }}
    </p>

    <small v-if="biz.fields.Services" class="text-muted"
      >{{ biz.fields.Services }}
    </small>

    <details
      v-if="biz.fields.Trainers?.length"
      :open="smAndLarger"
      class="card mt-2"
    >
      <summary class="card-header">Trainers</summary>
      <div class="list-group list-group-flush">
        <Trainer v-for="t in bizTrainers" :trainer="t" />
      </div>
    </details>
  </div>
</template>
