<script setup lang="ts">
// Можно импортировать те же данные, но отображать их иначе, например, списком карточек
import TechStack from '@/components/TechStack.vue'
</script>

<template>
  <main class="min-h-screen bg-zinc-950 text-zinc-100 pt-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-center">Projects & Methodology</h1>
      
      <div class="prose prose-invert max-w-none mb-12">
        <p class="text-lg text-zinc-300">
          My work is defined by a transition from legacy systems to modern, scalable architectures. 
          Below are the key areas where I've made a tangible impact.
        </p>
      </div>

      <!-- Здесь можно добавить детали по проектам, которых нет в таймлайне -->
      <div class="grid gap-6 mb-12">
        <div class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
          <h3 class="text-xl font-bold text-indigo-400 mb-2">Logistics Automation</h3>
          <p class="text-zinc-400">
            Developed International and Ground Transportation modules. Automated routing, tracking, and hazardous cargo coordination.
            <br><span class="text-emerald-400 text-sm font-semibold mt-2 block">Result: Optimised fleet resource utilisation.</span>
          </p>
        </div>
        
        <div class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
          <h3 class="text-xl font-bold text-indigo-400 mb-2">Legacy Modernization</h3>
          <p class="text-zinc-400">
            Spearheaded the migration of Delphi-based systems to Go. Improved scalability without disrupting business operations.
          </p>
        </div>
      </div>

      <TechStack />
    </div>
  </main>
</template>