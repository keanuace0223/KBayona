<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';
import { X, Terminal as TerminalIcon } from 'lucide-vue-next';

const emit = defineEmits(['close']);

const input = ref('');
const history = ref<string[]>([
  'Architect OS v1.1.0 initialized.',
  'Type "help" for a list of available commands.',
  ''
]);
const bottomRef = ref<HTMLDivElement | null>(null);

const scrollToBottom = async () => {
  await nextTick();
  bottomRef.value?.scrollIntoView({ behavior: 'smooth' });
};

watch(history, () => {
  scrollToBottom();
}, { deep: true });

const handleCommand = () => {
  const cmd = input.value.trim().toLowerCase();
  let response = '';

  if (!cmd) return;

  switch (cmd) {
    case 'help':
      response = 'Available commands: about, skills, contact, clear, exit, whoami';
      break;
    case 'whoami':
      response = 'Technical Director & Systems Architect';
      break;
    case 'about':
      response = 'Bridging hardware and software ecosystems with performance-first mindset.';
      break;
    case 'skills':
      response = 'Full-Stack, Infrastructure, Hardware Optimization, Broadcast Systems.';
      break;
    case 'contact':
      response = 'Email: systems@architect.dev';
      break;
    case 'clear':
      history.value = [];
      input.value = '';
      return;
    case 'exit':
      emit('close');
      return;
    default:
      response = `Command not found: ${cmd}. Type "help" for options.`;
  }

  history.value = [...history.value, `> ${input.value}`, response, ''];
  input.value = '';
};
</script>

<template>
  <div class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-[#1a1a1a] rounded-xl border border-stone-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
      <!-- Header -->
      <div class="bg-[#2a2a2a] px-4 py-3 flex items-center justify-between border-b border-stone-800">
        <div class="flex items-center gap-2">
          <TerminalIcon :size="16" class="text-accent" />
          <span class="text-[10px] uppercase tracking-widest font-bold text-stone-400">System Terminal</span>
        </div>
        <button @click="emit('close')" class="text-stone-500 hover:text-white transition-colors">
          <X :size="20" />
        </button>
      </div>
      
      <!-- Body -->
      <div class="p-6 h-[400px] overflow-y-auto font-mono text-sm text-stone-300">
        <div v-for="(line, i) in history" :key="i" :class="{ 'text-accent': line.startsWith('>') }">
          {{ line }}
        </div>
        <form @submit.prevent="handleCommand" class="flex items-center gap-2">
          <span class="text-accent">guest@architect:~$</span>
          <input 
            autofocus
            class="bg-transparent border-none outline-none focus:ring-0 flex-1 text-white"
            v-model="input"
          />
        </form>
        <div ref="bottomRef" />
      </div>
    </div>
  </div>
</template>
