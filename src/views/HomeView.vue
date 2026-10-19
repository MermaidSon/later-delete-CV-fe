<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ProcessFlow from '@/components/ProcessFlow.vue' // Новая схема
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import TechStack from '@/components/TechStack.vue'
</script>

<template>
  <main class="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30">
    <HeroSection />
    
    <!-- Секция "Обо мне" -->
    <section class="py-20 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">About Me</h2>
        <p class="text-lg md:text-xl text-zinc-300 leading-relaxed">
          I take a systematic approach to problem-solving — from analysis and modeling to implementation, 
          always considering business needs and user experience.
        </p>
        <div class="flex flex-wrap justify-center gap-3 pt-4">
          <span class="px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-sm font-medium">🎯 Goal: Tech Lead</span>
          <span class="px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-sm font-medium">📍 Sakhalin, Russia</span>
          <span class="px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-sm font-medium">🇬🇧 English: Fluent</span>
        </div>
      </div>
    </section>

    <ProcessFlow /> <!-- Добавляем схему здесь -->
    
    <div id="experience-section" class="scroll-mt-24">
      <ExperienceTimeline />
    </div>
    
    <TechStack />
    
    <footer class="py-12 text-center text-zinc-600 text-sm border-t border-zinc-800/50">
      <p>© {{ new Date().getFullYear() }} Vitalii Son. Built with Vue 3, Laravel & Tailwind CSS.</p>
    </footer>
  </main>
</template>