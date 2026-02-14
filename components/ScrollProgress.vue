<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const progress = ref(0);

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

onMounted(() => window.addEventListener('scroll', updateProgress, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', updateProgress));
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-[3px] z-[200] pointer-events-none">
    <div 
      class="h-full bg-accent transition-[width] duration-100 ease-out shadow-[0_0_10px_rgba(2,188,155,0.5)]"
      :style="{ width: progress + '%' }"
    />
  </div>
</template>
