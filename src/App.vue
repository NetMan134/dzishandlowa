<script setup lang="ts">
import TodayView from './views/TodayView.vue'
import NextSundays from './views/NextSundays.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  <div
    class="*:p-3 *:[text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] md:*:[text-shadow:_0_5px_0_rgb(0_0_0_/_40%)] *:flex *:flex-col *:justify-center *:items-center *:text-3xl *:md:text-4xl *:lg:text-5xl *:text-center *:text-white"
  >
    <TodayView class="min-h-[98dvh]" />
    <NextSundays class="min-h-[85dvh] px-4 py-6" />
  </div>
  <FooterView />
</template>
