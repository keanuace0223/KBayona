<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { animate, stagger, inView } from 'motion';
import { Sun, Moon, Menu, X, Github, Mail, Terminal as TerminalIcon, ArrowUpRight } from 'lucide-vue-next';
import ProjectCard from './components/ProjectCard.vue';
import ExperienceItem from './components/ExperienceItem.vue';
import TerminalOverlay from './components/TerminalOverlay.vue';
import { PROJECTS, EXPERIENCES } from './constants';
import { Theme } from './types';

const theme = ref<Theme>('light');
const isTerminalOpen = ref(false);
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

type TechStack = {
  name: string;
  logo?: string;
};

const base = import.meta.env.BASE_URL;

const TECH_STACKS: TechStack[] = [
  { name: 'React', logo: `${base}assets/images/react.svg` },
  { name: 'Vue.js', logo: `${base}assets/images/vue.svg` },
  { name: 'TypeScript', logo: `${base}assets/images/typescript.svg` },
  { name: 'Node.js', logo: `${base}assets/images/node.svg` },
  { name: 'PHP', logo: `${base}assets/images/php.svg` },
  { name: '.NET', logo: `${base}assets/images/net.svg` },
  { name: 'PostgreSQL', logo: `${base}assets/images/postgresql.svg` },
  { name: 'HTML', logo: `${base}assets/images/html.svg` },
  { name: 'CSS', logo: `${base}assets/images/css.svg` },
  { name: 'React Native' },
  { name: 'Supabase' },
  { name: 'Javascript' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent body scroll when menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Staggered Hero Reveal
  const heroLines = document.querySelectorAll(".hero-line");
  if (heroLines.length > 0) {
    animate(
      heroLines as any,
      { y: [100, 0], opacity: [0, 1] } as any,
      { 
        delay: stagger(0.1),
        duration: 0.4,
        easing: [0.16, 1, 0.3, 1]
      } as any
    );
  }

  const subheadline = document.querySelector(".hero-subheadline");
  if (subheadline) {
    animate(
      subheadline as any,
      { opacity: [0, 1], y: [20, 0] } as any,
      { 
        delay: 0.5,
        duration: 0.4,
        easing: "ease-out"
      } as any
    );
  }

  // Initial theme application
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Section Reveal on Scroll — Projects
  inView(".project-card-container", (element) => {
    animate(
      element.querySelectorAll(".project-card-reveal") as any,
      { y: [20, 0], opacity: [0, 1] } as any,
      { 
        delay: stagger(0.1),
        duration: 0.4,
        easing: [0.16, 1, 0.3, 1]
      } as any
    );
  });

  // Section Reveal on Scroll — Experience
  inView(".experience-reveal", (element) => {
    animate(
      element as any,
      { y: [30, 0], opacity: [0, 1] } as any,
      {
        duration: 0.5,
        easing: [0.16, 1, 0.3, 1]
      } as any
    );
  });

  // Section Reveal on Scroll — Contact
  inView(".contact-reveal", (element) => {
    animate(
      element as any,
      { y: [40, 0], opacity: [0, 1], scale: [0.97, 1] } as any,
      {
        duration: 0.6,
        easing: [0.16, 1, 0.3, 1]
      } as any
    );
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});

watch(theme, (newTheme) => {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

const scrollToSection = (e: Event, id: string) => {
  const element = document.getElementById(id);
  if (element) {
    e.preventDefault();
    closeMobileMenu();
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

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
          <span class="text-accent">K</span>Bayona<span class="text-accent group-hover:animate-pulse">.</span>
        </a>
        
        <div class="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.25em] font-semibold text-stone-500 dark:text-stone-400">
          <a class="hover:text-accent dark:hover:text-accent transition-colors duration-300" href="#work" @click="scrollToSection($event, 'work')">Works</a>
          <a class="hover:text-accent dark:hover:text-accent transition-colors duration-300" href="#experience" @click="scrollToSection($event, 'experience')">About</a>
          <a class="hover:text-accent dark:hover:text-accent transition-colors duration-300" href="#contact" @click="scrollToSection($event, 'contact')">Contact</a>
        </div>
        
        <button class="md:hidden relative z-[110]" @click="toggleMobileMenu" aria-label="Toggle menu">
          <transition name="icon-swap" mode="out-in">
            <X v-if="isMobileMenuOpen" class="text-accent" :size="24" />
            <Menu v-else class="text-accent" :size="24" />
          </transition>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] md:hidden">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-md" @click="closeMobileMenu"></div>
        <!-- Menu Panel -->
        <div class="absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white dark:bg-background-dark border-l border-stone-200 dark:border-stone-800 flex flex-col pt-24 px-8 pb-8 shadow-2xl">
          <nav class="flex flex-col gap-1 mb-12">
            <a 
              class="text-2xl font-display font-light py-4 border-b border-stone-100 dark:border-stone-800 hover:text-accent hover:pl-2 transition-all duration-300" 
              href="#work" 
              @click="scrollToSection($event, 'work')"
            >Works</a>
            <a 
              class="text-2xl font-display font-light py-4 border-b border-stone-100 dark:border-stone-800 hover:text-accent hover:pl-2 transition-all duration-300" 
              href="#experience" 
              @click="scrollToSection($event, 'experience')"
            >About</a>
            <a 
              class="text-2xl font-display font-light py-4 border-b border-stone-100 dark:border-stone-800 hover:text-accent hover:pl-2 transition-all duration-300" 
              href="#contact" 
              @click="scrollToSection($event, 'contact')"
            >Contact</a>
          </nav>

          <div class="flex flex-col gap-4 mb-auto">
            <a class="flex items-center gap-3 text-sm text-stone-500 hover:text-accent transition-colors" href="https://github.com/keanuace0223" target="_blank">
              <Github :size="18" /> GitHub
            </a>
            <a class="flex items-center gap-3 text-sm text-stone-500 hover:text-accent transition-colors" href="mailto:keanuacebayona@gmail.com">
              <Mail :size="18" /> keanuacebayona@gmail.com
            </a>
          </div>

          <div class="mt-8 pt-8 border-t border-stone-200 dark:border-stone-800">
            <button 
              @click="toggleTheme" 
              class="flex items-center gap-3 text-sm text-stone-500 hover:text-accent transition-colors"
            >
              <Moon v-if="theme === 'light'" :size="18" />
              <Sun v-else :size="18" />
              {{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}
            </button>
          </div>
        </div>
      </div>
    </transition>

    <main class="max-w-[1440px] mx-auto px-6 md:px-12 overflow-x-hidden">
      <!-- Hero Section -->
      <section class="min-h-screen flex flex-col justify-center pt-20">
        <div class="max-w-6xl">
          <h1 class="text-6xl md:text-8xl lg:text-[9.5rem] font-light leading-[0.9] mb-12 -ml-1 md:ml-[-0.05em] tracking-tighter">
            <div class="overflow-hidden py-4 -my-4"><div class="hero-line">Systems Architect</div></div>
            <div class="overflow-hidden py-4 -my-4"><div class="hero-line italic font-medium text-accent">&amp; Full-Stack</div></div>
            <div class="overflow-hidden py-4 -my-4"><div class="hero-line">Software Engineer</div></div>
          </h1>
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 hero-subheadline opacity-0">
            <p class="text-lg md:text-2xl text-stone-500 dark:text-stone-400 max-w-2xl leading-relaxed font-light">
              Designing scalable software ecosystems and optimized hardware backends. I build robust digital architectures where clean logic meets seamless, high-performance user experiences.
            </p>
            <div class="flex gap-4">
              <a 
                class="bg-accent text-white px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 accent-glow shadow-lg shadow-accent/20 flex items-center gap-2" 
                href="#work"
                @click="scrollToSection($event, 'work')"
              >
                Explore Systems <ArrowUpRight :size="14" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Carousel -->
      <section class="py-6 overflow-hidden border-y border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div class="flex whitespace-nowrap animate-scroll">
          <div class="flex items-center gap-20 px-10">
            <div v-for="tech in TECH_STACKS" :key="tech.name" class="flex items-center gap-4 group/item cursor-default" :title="tech.name">
              <img v-if="tech.logo" class="w-8 h-8 opacity-70 group-hover/item:opacity-100 transition-opacity duration-300" :src="tech.logo" :alt="tech.name" />
              <span class="text-xs uppercase tracking-[0.4em] font-bold text-stone-400 dark:text-stone-500 group-hover/item:text-accent transition-colors duration-300">
                {{ tech.name }}
              </span>
            </div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div class="flex items-center gap-20 px-10" aria-hidden="true">
            <div v-for="tech in TECH_STACKS" :key="tech.name + '-clone'" class="flex items-center gap-4 group/item cursor-default" :title="tech.name">
              <img v-if="tech.logo" class="w-8 h-8 opacity-70 group-hover/item:opacity-100 transition-opacity duration-300" :src="tech.logo" :alt="tech.name" />
              <span class="text-xs uppercase tracking-[0.4em] font-bold text-stone-400 dark:text-stone-500 group-hover/item:text-accent transition-colors duration-300">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Selected Works Section -->
      <section class="py-32" id="work">
        <div class="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-stone-200 dark:border-stone-800 pb-12">
          <h2 class="text-5xl md:text-6xl font-light tracking-tight">Projects <span class="italic text-accent">| Works</span></h2>
          <p class="text-stone-400 text-[10px] uppercase tracking-[0.3em] font-bold mt-4 md:mt-0">Core Projects — 2024</p>
        </div>
        
        <div class="grid grid-cols-12 gap-y-32 md:gap-y-48 gap-x-12 project-card-container">
          <!-- Project 1 -->
          <div class="col-span-12 md:col-span-7 project-card-reveal opacity-0">
            <ProjectCard 
              :project="PROJECTS[0]" 
            />
          </div>
          
          <!-- Project 2 -->
          <div class="col-span-12 md:col-start-6 md:col-span-7 project-card-reveal opacity-0">
            <ProjectCard 
              :project="PROJECTS[1]" 
            />
          </div>
          
          <!-- Project 3 -->
          <div class="col-span-12 md:col-span-6 project-card-reveal opacity-0">
            <ProjectCard 
              :project="PROJECTS[2]" 
            />
          </div>
        </div>
      </section>

      <!-- Specialized Experience Section -->
      <section class="py-32" id="experience">
        <div class="grid grid-cols-12 gap-12">
          <div class="col-span-12 lg:col-span-4 experience-reveal opacity-0">
            <div class="lg:sticky lg:top-32">
              <h2 class="text-4xl md:text-5xl font-light leading-tight mb-8">
                Specialized <br/><span class="italic text-accent font-medium">Technical Experience</span>
              </h2>
              <p class="text-stone-500 dark:text-stone-400 max-w-sm hidden lg:block">
                A multi-disciplinary approach to solving architectural challenges across hardware and software boundaries.
              </p>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-8 space-y-16 experience-reveal opacity-0">
            <ExperienceItem v-for="exp in EXPERIENCES" :key="exp.id" :experience="exp" />
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-32 md:py-64 flex flex-col items-center text-center contact-reveal opacity-0" id="contact">
        <h2 class="text-4xl md:text-8xl font-light mb-16 tracking-tight max-w-5xl leading-tight px-4">
          Open for <span class="italic text-accent">technical</span> consulting &amp; ventures.
        </h2>
        <div class="group relative inline-block">
          <a 
            class="text-xl md:text-4xl font-display font-light border-b border-stone-300 dark:border-stone-700 pb-4 block hover:text-accent hover:border-accent transition-all duration-500" 
            href="mailto:keanuacebayona@gmail.com"
          >
            keanuacebayona@gmail.com
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
            Dasmarinas City, Cavite
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
        <div class="flex space-x-8 md:space-x-12 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500">
          <a class="hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-1" href="https://github.com/keanuace0223" target="_blank">
            <Github :size="14" /> GitHub
          </a>
          <a class="hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-1" href="mailto:keanuacebayona@gmail.com">
            <Mail :size="14" /> Mail
          </a>
          <button 
            @click="isTerminalOpen = true"
            class="hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-1 uppercase"
          >
            <TerminalIcon :size="14" /> Terminal
          </button>
        </div>
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
