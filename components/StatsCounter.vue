<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Stat } from '../types';

interface Props {
  stats: Stat[];
}

const props = defineProps<Props>();

const displayValues = ref<number[]>(props.stats.map(() => 0));
const hasAnimated = ref(false);
const containerRef = ref<HTMLElement | null>(null);

const animateCount = (target: number, index: number) => {
  const duration = 1500;
  const startTime = performance.now();
  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    displayValues.value[index] = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

onMounted(() => {
  if (!containerRef.value) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true;
          props.stats.forEach((stat, i) => {
            setTimeout(() => animateCount(stat.value, i), i * 150);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(containerRef.value);
});
</script>

<template>
  <div ref="containerRef" class="stats-counter-row grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
    <div 
      v-for="(stat, index) in stats" 
      :key="stat.label"
      class="stat-item text-center"
    >
      <div class="text-3xl sm:text-4xl md:text-5xl font-display font-light text-accent mb-1">
        {{ displayValues[index] }}{{ stat.suffix }}
      </div>
      <div class="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-stone-400 dark:text-stone-500">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>
