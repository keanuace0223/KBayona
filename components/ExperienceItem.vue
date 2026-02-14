<script setup lang="ts">
import { Experience } from '../types';
import * as LucideIcons from 'lucide-vue-next';
import { computed } from 'vue';

interface Props {
  experience: Experience;
}

const props = defineProps<Props>();

const iconComponent = computed(() => {
  // @ts-ignore
  return LucideIcons[props.experience.iconName] || LucideIcons.Zap;
});
</script>

<template>
  <div class="border-b border-stone-200 dark:border-stone-800 pb-8 sm:pb-12 group last:border-0">
    <div class="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div class="p-2 text-accent bg-accent/5 rounded-lg border border-accent/10 group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
        <component :is="iconComponent" :size="20" class="sm:w-6 sm:h-6" :stroke-width="1.5" />
      </div>
      <h3 class="text-lg sm:text-xl md:text-2xl font-light group-hover:translate-x-2 transition-transform duration-300">
        {{ props.experience.title }}
      </h3>
    </div>
    <div class="flex flex-wrap gap-2 mb-4 sm:mb-6">
      <span 
        v-for="tag in props.experience.tags" 
        :key="tag"
        class="px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-accent/20"
      >
        {{ tag }}
      </span>
    </div>
    <p class="text-stone-500 dark:text-stone-400 text-base sm:text-lg leading-relaxed max-w-2xl">
      {{ props.experience.description }}
    </p>
  </div>
</template>
