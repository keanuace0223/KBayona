<script setup lang="ts">
import { BlogPost } from '../types';
import { ArrowUpRight } from 'lucide-vue-next';

interface Props {
  post: BlogPost;
}

defineProps<Props>();
</script>

<template>
  <a 
    :href="post.url" 
    :target="post.url !== '#' ? '_blank' : undefined"
    class="block border border-stone-200 dark:border-stone-800 rounded-xl p-6 sm:p-8 hover:border-accent/30 transition-all duration-500 group bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm"
  >
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-2">
        <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-accent bg-accent/10 px-2 py-1 rounded-full">{{ post.platform }}</span>
        <span class="text-[10px] uppercase tracking-[0.2em] text-stone-400">{{ post.date }}</span>
      </div>
      <ArrowUpRight :size="16" class="text-stone-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
    </div>
    <h3 class="text-base sm:text-lg font-display font-medium mb-2 group-hover:text-accent transition-colors duration-300 leading-snug">
      {{ post.title }}
    </h3>
    <p class="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
      {{ post.excerpt }}
    </p>
  </a>
</template>
