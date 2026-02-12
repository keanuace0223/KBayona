<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { Sun, Moon, Menu, Github, Linkedin, Terminal as TerminalIcon, ArrowUpRight } from 'lucide-vue-next';
import ProjectCard from './components/ProjectCard.vue';
import ExperienceItem from './components/ExperienceItem.vue';
import TerminalOverlay from './components/TerminalOverlay.vue';
import { PROJECTS, EXPERIENCES } from './constants';
import { Theme } from './types';

const theme = ref<Theme>('light');
const isTerminalOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Initial theme application
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

watch(theme, (newTheme) => {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
};
</script>

<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav :class="[
      'fixed top-0 w-full z-50 transition-all duration-500',
      isScrolled 
        ? 'py-4 px-6 md:px-12 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800' 
        : 'py-8 px-6 md:px-12 bg-transparent'
    ]">
      <div class="max-w-[1440px] mx-auto flex justify-between items-center">
        <a class="text-xl font-display font-bold tracking-tighter flex items-center gap-1 group" href="#">
          KBayona<span class="text-accent group-hover:animate-pulse">.</span>
        </a>
        
        <div class="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.25em] font-semibold text-stone-500 dark:text-stone-400">
          <a class="hover:text-accent dark:hover:text-accent transition-colors duration-300" href="#work">Works</a>
          <a class="hover:text-accent dark:hover:text-accent transition-colors duration-300" href="#experience">About</a>
          <a class="hover:text-accent dark:hover:text-accent transition-colors duration-300" href="#contact">Contact</a>
        </div>
        
        <div class="md:hidden">
          <Menu class="text-accent" :size="24" />
        </div>
      </div>
    </nav>

    <main class="max-w-[1440px] mx-auto px-6 md:px-12 overflow-x-hidden">
      <!-- Hero Section -->
      <section class="min-h-screen flex flex-col justify-center pt-20">
        <div class="max-w-6xl">
          <p class="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8 block animate-in slide-in-from-left duration-700">
            Infrastructures & Solutions
          </p>
          <h1 class="text-6xl md:text-8xl lg:text-[9.5rem] font-light leading-[0.9] mb-12 -ml-1 md:ml-[-0.05em] tracking-tighter animate-in slide-in-from-bottom duration-1000">
            Technical Director <br/>
            <span class="italic font-medium text-accent">&amp; Full-Stack</span> <br/>
            Systems Architect
          </h1>
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <p class="text-lg md:text-2xl text-stone-500 dark:text-stone-400 max-w-2xl leading-relaxed font-light">
              Bridging the gap between complex hardware ecosystems and robust software architectures. Engineering high-performance digital environments with a systems-first mindset.
            </p>
            <div class="flex gap-4">
              <a 
                class="bg-accent text-white px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 accent-glow shadow-lg shadow-accent/20 flex items-center gap-2" 
                href="#work"
              >
                Explore Systems <ArrowUpRight :size="14" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Selected Works Section -->
      <section class="py-32" id="work">
        <div class="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-stone-200 dark:border-stone-800 pb-12">
          <h2 class="text-5xl md:text-6xl font-light tracking-tight">Selected <span class="italic text-accent">Works</span></h2>
          <p class="text-stone-400 text-[10px] uppercase tracking-[0.3em] font-bold mt-4 md:mt-0">Core Projects — 2024</p>
        </div>
        
        <div class="grid grid-cols-12 gap-y-32 md:gap-y-48 gap-x-12">
          <!-- Project 1 -->
          <ProjectCard 
            :project="PROJECTS[0]" 
            class="col-span-12 md:col-span-7" 
          />
          
          <!-- Project 2 -->
          <ProjectCard 
            :project="PROJECTS[1]" 
            class="col-span-12 md:col-start-6 md:col-span-7" 
          />
          
          <!-- Project 3 -->
          <ProjectCard 
            :project="PROJECTS[2]" 
            class="col-span-12 md:col-span-6" 
          />
        </div>
      </section>

      <!-- Specialized Experience Section -->
      <section class="py-32" id="experience">
        <div class="grid grid-cols-12 gap-12">
          <div class="col-span-12 lg:col-span-4">
            <div class="lg:sticky lg:top-32">
              <h2 class="text-4xl md:text-5xl font-light leading-tight mb-8">
                Specialized <br/><span class="italic text-accent font-medium">Technical Experience</span>
              </h2>
              <p class="text-stone-500 dark:text-stone-400 max-w-sm hidden lg:block">
                A multi-disciplinary approach to solving architectural challenges across hardware and software boundaries.
              </p>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-8 space-y-16">
            <ExperienceItem v-for="exp in EXPERIENCES" :key="exp.id" :experience="exp" />
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-64 flex flex-col items-center text-center" id="contact">
        <h2 class="text-5xl md:text-8xl font-light mb-16 tracking-tight max-w-5xl leading-tight">
          Open for <span class="italic text-accent">technical</span> consulting &amp; ventures.
        </h2>
        <div class="group relative inline-block">
          <a class="text-2xl md:text-4xl font-display font-light border-b border-stone-300 dark:border-stone-700 pb-4 block hover:text-accent hover:border-accent transition-all duration-500" href="mailto:systems@architect.dev">
            systems@architect.dev
          </a>
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full"></span>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="px-6 md:px-12 py-16 border-t border-stone-200 dark:border-stone-800 max-w-[1440px] mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div class="space-y-2">
          <div class="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">
            Location
          </div>
          <div class="text-sm font-semibold text-primary dark:text-white uppercase tracking-widest">
            Alabang / Metro Manila
          </div>
        </div>
        <div class="space-y-2 text-center md:text-left">
          <div class="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">
            Current Status
          </div>
          <div class="text-sm font-semibold text-primary dark:text-white uppercase tracking-widest flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#02BC9B]"></span>
            486-Hour Internship Progress
          </div>
        </div>
        <div class="flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500">
          <a class="hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-1" href="#">
            <Github :size="14" /> GitHub
          </a>
          <a class="hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-1" href="#">
            <Linkedin :size="14" /> LinkedIn
          </a>
          <button 
            @click="isTerminalOpen = true"
            class="hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-1 uppercase"
          >
            <TerminalIcon :size="14" /> Terminal
          </button>
        </div>
      </div>
      <div class="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 dark:text-stone-600">
        <div>© 2024 Systems Architect Portfolio — <span class="text-accent">Version 1.1.0</span></div>
        <div class="text-stone-300 dark:text-stone-800">Designed with intent for systems excellence</div>
      </div>
    </footer>

    <!-- Floating Controls -->
    <div class="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <button 
        @click="toggleTheme"
        class="w-14 h-14 rounded-full bg-white dark:bg-stone-800 text-primary dark:text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95 group relative border border-stone-200 dark:border-stone-700"
        title="Toggle Theme"
      >
        <Moon v-if="theme === 'light'" :size="20" />
        <Sun v-else :size="20" />
      </button>
      <button 
        @click="isTerminalOpen = true"
        class="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95 group relative"
        title="Open System Terminal"
      >
        <TerminalIcon :size="20" />
      </button>
    </div>

    <!-- Terminal Modal -->
    <TerminalOverlay v-if="isTerminalOpen" @close="isTerminalOpen = false" />
  </div>
</template>
