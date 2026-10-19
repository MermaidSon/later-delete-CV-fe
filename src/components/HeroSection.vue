<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToExperience = () => {
  console.log('🚀 Переход на страницу опыта...');
  router.push('/experience');
};
</script>

<template>
  <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 pt-20">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div class="relative z-10 max-w-4xl mx-auto text-center space-y-8">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span class="text-sm font-medium text-zinc-300">Open to Tech Lead opportunities</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-white">
        Vitalii <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Son</span>
      </h1>
      
      <p class="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
        Backend Developer & Systems / Business Analyst
      </p>
      
      <p class="text-base text-zinc-500 max-w-xl mx-auto">
        Fast-learning backend developer experienced in databases and desktop software. 
        Acquired Systems/Business Analyst competencies through hands-on experience.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
        <!-- Используем router.push вместо поиска по ID -->
        <button 
          @click="goToExperience" 
          class="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 text-center cursor-pointer"
        >
          View Experience
        </button>
        
        <a href="mailto:vitaliison.tech@gmail.com" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-semibold transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>