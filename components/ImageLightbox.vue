<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { X } from 'lucide-vue-next';

interface Props {
  imageUrl: string;
  alt: string;
}

defineProps<Props>();
const emit = defineEmits(['close']);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close');
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-8">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/90 backdrop-blur-md" @click="emit('close')" />
    
    <!-- Close button -->
    <button 
      class="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
      @click="emit('close')"
    >
      <X :size="20" />
    </button>
    
    <!-- Image -->
    <img 
      :src="imageUrl" 
      :alt="alt"
      class="relative z-10 max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-lightbox-in"
      @click.stop
    />
  </div>
</template>
