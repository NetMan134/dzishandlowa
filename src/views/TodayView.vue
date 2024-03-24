<script setup lang="ts">
import { ArrowDown } from 'lucide-vue-next'
import { useDates } from '@/composables'
import { ref } from 'vue'
function scrollDown() {
  if (today.value) {
    window.scrollTo({
      top: today.value.scrollHeight ?? document.body.scrollHeight,
      behavior: 'smooth'
    })
  }
}

const today = ref<Element | null>(null)
const smaller = ref(false)

setInterval(() => {
  smaller.value = document.body.offsetWidth < 600
}, 50)
</script>

<template>
  <div
    class="relative !py-20"
    ref="today"
    :class="
      useDates('isTodayWorkingSunday')
        ? 'bg-green-500'
        : useDates('isTodaySunday')
          ? 'bg-orange-500'
          : 'bg-red-500'
    "
  >
    <span>
      Dziś jest {{ useDates('todayWeekday') }}
      <span v-if="useDates('isTodayWorkingSunday')">
        {{ ' handlowa!' }}
        <br v-if="!smaller" />
      </span>
      <br v-if="smaller" />
      <em>{{ useDates('todayFormatted') }}</em>
      <br />
      następna niedziela
      <br v-if="smaller" />
      handlowa będzie:
      <br />
      <span class="font-bold underline text-4xl md:text-5xl lg:text-6xl">
        {{ useDates('nextWorkingSundayFormatted') }}
      </span>
    </span>

    <div class="absolute bottom-5 cursor-pointer" id="scroll" @click="scrollDown()">
      <ArrowDown class="drop-shadow-lg" />
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
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.15);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}
</style>
