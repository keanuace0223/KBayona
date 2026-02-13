<script setup lang="ts">
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-vue-next';

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
        'overflow-hidden mb-6 sm:mb-8 relative rounded-lg border border-transparent group-hover:border-accent/30 transition-all duration-500',
        props.project.darkVariant 
          ? 'bg-black aspect-[16/10] flex items-center justify-center' 
          : 'bg-stone-200 dark:bg-stone-800',
        !props.project.darkVariant && (props.project.aspectRatio === 'tall' ? 'aspect-[4/5]' : 'aspect-[16/10]')
      ]"
    >
      <!-- Dark variant: text-based focal point -->
      <!-- Dark variant: centered logo on black -->
      <div v-if="props.project.darkVariant" class="flex items-center justify-center h-full px-8">
        <img 
          v-if="props.project.imageUrl"
          :alt="props.project.title" 
          class="max-h-[60%] max-w-[80%] object-contain transition-all duration-400 ease-out group-hover:scale-105" 
          :src="props.project.imageUrl" 
        />
        <div v-else class="text-center">
          <div class="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-3">{{ props.project.category }}</div>
          <div class="text-white text-2xl sm:text-4xl font-display font-light tracking-tight">{{ props.project.title }}</div>
        </div>
      </div>
      <!-- Standard image card -->
      <template v-else>
        <img 
          :alt="props.project.title" 
          class="w-full h-full object-cover transition-all duration-400 ease-out group-hover:scale-105" 
          :src="props.project.imageUrl" 
        />
        <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
      </template>
    </div>
    <div class="flex justify-between items-start gap-4">
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-2 mb-2">
          <div class="relative flex items-center justify-center w-2 h-2 shrink-0">
            <div class="absolute inset-0 rounded-full bg-accent animate-ping opacity-75"></div>
            <div class="relative w-1.5 h-1.5 rounded-full bg-accent"></div>
          </div>
          <p class="text-accent text-[10px] uppercase tracking-widest font-bold truncate">
            {{ props.project.category }}
          </p>
        </div>
        <h3 class="text-xl sm:text-3xl font-light group-hover:text-accent transition-colors duration-300 mb-2">
          {{ props.project.title }}
        </h3>
        <p class="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
          {{ props.project.description }}
        </p>
        <!-- Links -->
        <div v-if="props.project.githubUrl || props.project.liveUrl" class="flex items-center gap-4 mt-3">
          <a 
            v-if="props.project.githubUrl" 
            :href="props.project.githubUrl" 
            target="_blank" 
            class="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-accent transition-colors duration-300"
            @click.stop
          >
            <Github :size="14" /> Source
          </a>
          <a 
            v-if="props.project.liveUrl" 
            :href="props.project.liveUrl" 
            target="_blank" 
            class="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-accent transition-colors duration-300"
            @click.stop
          >
            <ExternalLink :size="14" /> Live Demo
          </a>
        </div>
      </div>
      <span class="font-display italic text-2xl bg-accent text-white group-hover:bg-accent/90 transition-colors px-2 py-1 rounded shrink-0">
        {{ props.project.number }}
      </span>
    </div>
  </div>
</template>
