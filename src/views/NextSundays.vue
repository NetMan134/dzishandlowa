<script setup lang="ts">
import { format, isPast, isToday } from 'date-fns'
import shoppingSundays from '@/sundaysList'
</script>

<template>
  <div
    class="flex flex-col justify-center items-center text-5xl text-center bg-blue-500 text-white [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]"
  >
    <h1>Następne niedziele handlowe:</h1>
    <span
      v-for="(sunday, index) in shoppingSundays.some((d) => isToday(new Date(d)))
        ? shoppingSundays.toSpliced(0, 2)
        : shoppingSundays.toSpliced(0, 1)"
      :key="sunday.toISOString()"
    >
      {{ !isPast(new Date(sunday)) && index <= 10 ? format(new Date(sunday), 'PPP') : '' }}
    </span>
    <span>(...)</span>
  </div>
</template>

<style></style>
