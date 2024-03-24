<script setup lang="ts">
import { useDates } from '@/composables'
</script>

<template>
  <div class="bg-blue-500">
    <h1><strong>Następne niedziele handlowe:</strong></h1>
    <span v-for="sunday in useDates('upcommingWorkingSundaysFormatted')" :key="sunday">
      {{ sunday }}
    </span>
    <span class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">(...)</span>
  </div>
</template>
