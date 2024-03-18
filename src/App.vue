<script setup lang="ts">
import TodayView from './views/TodayView.vue'
import NextSundays from './views/NextSundays.vue'
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <div class="*:min-h-dvh *:p-3">
    <TodayView />
    <NextSundays />
  </div>
  <div
    class="bg-slate-800 text-slate-50 text-lg text-center p-2 flex flex-col justify-center items-center sm:flex-row"
  >
    <span>
      Made by <a href="https://netman.ovh" class="underline text-blue-400">NetMan</a> with
    </span>
    <Heart class="fill-red-500 stroke-red-200 px-0.5 mx-1" />
    <span> & <a href="https://vuejs.org" class="underline text-blue-400">Vue.js</a> </span>
  </div>
</template>

<style scoped></style>
