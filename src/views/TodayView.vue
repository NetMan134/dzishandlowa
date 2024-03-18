<script setup lang="ts">
import { format, closestTo, isToday } from 'date-fns'
import shoppingSundays from '@/sundaysList'
import { ArrowDown } from 'lucide-vue-next'

function scrollDown() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}
</script>

<template>
  <div
    class="flex flex-col justify-center items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)] relative"
    :class="
      shoppingSundays.some((d) => isToday(new Date(d)))
        ? 'bg-green-500'
        : format(new Date(), 'iiii') === 'niedziela'
          ? 'bg-orange-500'
          : 'bg-red-500'
    "
  >
    <span>
      Dziś jest {{ format(new Date(), 'cccc')
      }}{{ shoppingSundays.some((d) => isToday(new Date(d))) ? ' handlowa!' : ',' }}
      <br v-if="shoppingSundays.some((d) => isToday(new Date(d)))" />
      <em>{{ format(new Date(), 'PPP') }}</em>
      <br />
      następna niedziela handlowa będzie:<br />
      <span class="font-bold underline text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{{
        format(
          closestTo(
            new Date(),
            shoppingSundays.some((d) => isToday(new Date(d)))
              ? shoppingSundays.toSpliced(0, 1)
              : shoppingSundays
          ) ?? 'error',
          'PPP'
        )
      }}</span>
    </span>

    <div class="absolute bottom-5 cursor-pointer" id="scroll" @click="scrollDown()">
      <ArrowDown />
    </div>
  </div>
</template>

<style>
#scroll {
  animation: scrollUpDown 1.3s infinite;
  font-size: 1.4em;
}
@keyframes scrollUpDown {
  0% {
    transform: translateY(0) scale(1.15);
  }
  50% {
    transform: translateY(-20px) scale(1.15);
  }
  100% {
    transform: translateY(0) scale(1.15);
  }
}
</style>
