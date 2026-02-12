<script setup lang="ts">
import { Project } from '../types';

interface Props {
  project: Project;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: ""
});
</script>

<template>
  <div :class="['group cursor-pointer hover-lift', props.className]">
    <div 
      :class="[
        'overflow-hidden bg-stone-200 dark:bg-stone-800 mb-8 relative rounded-lg border border-transparent group-hover:border-accent/30 transition-all duration-500',
        props.project.aspectRatio === 'tall' ? 'aspect-[4/5]' : 'aspect-[16/10]'
      ]"
    >
      <img 
        :alt="props.project.title" 
        class="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
        :src="props.project.imageUrl" 
      />
      <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <div class="flex justify-between items-start">
      <div class="max-w-[80%]">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <p class="text-accent text-[10px] uppercase tracking-widest font-bold truncate">
            {{ props.project.category }}
          </p>
        </div>
        <h3 class="text-3xl font-light group-hover:text-accent transition-colors duration-300">
          {{ props.project.title }}
        </h3>
      </div>
      <span class="font-display italic text-2xl text-stone-300 dark:text-stone-700 group-hover:text-accent/30 transition-colors">
        {{ props.project.number }}
      </span>
    </div>
  </div>
</template>
