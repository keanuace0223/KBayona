<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const x = ref(0);
const y = ref(0);
const isVisible = ref(false);
const isDesktop = ref(false);

const handleMouseMove = (e: MouseEvent) => {
  x.value = e.clientX;
  y.value = e.clientY;
  if (!isVisible.value) isVisible.value = true;
};

const handleMouseLeave = () => {
  isVisible.value = false;
};

onMounted(() => {
  // Only show on non-touch desktop devices
  isDesktop.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (isDesktop.value) {
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
  }
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseleave', handleMouseLeave);
});
</script>

<template>
  <div 
    v-if="isDesktop"
    class="fixed pointer-events-none z-[9999] transition-opacity duration-300"
    :class="isVisible ? 'opacity-100' : 'opacity-0'"
    :style="{
      left: x + 'px',
      top: y + 'px',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(2,188,155,0.06) 0%, transparent 70%)',
      borderRadius: '50%',
    }"
  />
</template>
