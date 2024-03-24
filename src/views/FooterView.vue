<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <div
    class="bg-slate-800 text-slate-50 text-lg text-center p-2 flex flex-col justify-center items-center sm:flex-row gap-x-1"
  >
    <span> Made by <a href="https://netman.ovh" class="underline text-blue-400">NetMan</a> </span>
    <span class="flex flex-row">
      with <Heart class="fill-red-500 stroke-red-200 px-0.5 mx-1" /> & &nbsp;
      <a href="https://vuejs.org" class="underline text-blue-400"> Vue.js</a>
    </span>
  </div>
</template>
