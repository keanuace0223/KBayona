<script setup lang="ts">
import { Testimonial } from '../types';
import { Quote } from 'lucide-vue-next';

interface Props {
  testimonial: Testimonial;
}

defineProps<Props>();
</script>

<template>
  <div class="border border-stone-200 dark:border-stone-800 rounded-xl p-6 sm:p-8 hover:border-accent/30 transition-all duration-500 group bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm">
    <Quote :size="24" class="text-accent/30 mb-4 group-hover:text-accent/60 transition-colors duration-300" />
    <blockquote class="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-6 italic">
      "{{ testimonial.quote }}"
    </blockquote>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">
        {{ testimonial.name.charAt(0) }}
      </div>
      <div>
        <div class="text-sm font-semibold">{{ testimonial.name }}</div>
        <div class="text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-wider">{{ testimonial.role }}</div>
      </div>
    </div>
  </div>
</template>
