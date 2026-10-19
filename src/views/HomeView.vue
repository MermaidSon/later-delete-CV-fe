<script setup lang="ts">
import { store } from '@/stores/store'
import { computed } from 'vue'

// Форматируем дату в стиль "Jan 2025"
const formatDate = (dateStr: string | null | undefined) => {
  if (!dateStr || dateStr === 'null') return 'Present'
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

// SVG иконки для контактов
const icons = {
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
}

// Хелпер для получения иконки по тексту
const getIcon = (text: string) => {
  const lower = text.toLowerCase()
  if (lower.includes('mail') || lower.includes('gmail')) return icons.mail
  if (lower.includes('phone') || lower.includes('+7')) return icons.phone
  if (lower.includes('github')) return icons.github
  return icons.location
}
</script>

<template>
  <div class="space-y-16 md:space-y-24">
    
    <!-- 1. HERO SECTION -->
    <section class="pt-8 md:pt-16">
      <p class="font-mono text-emerald-400 text-sm mb-4 tracking-wider">Hello, my name is</p>
      <h1 class="font-sans text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
        {{ store.owner?.name || 'Vitalii Son' }}.
      </h1>
      <h2 class="font-sans text-3xl md:text-5xl font-bold text-slate-400 mb-8">
        I build scalable backend systems.
      </h2>
      
      <div class="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10 space-y-4">
        <p>
          Backend developer with fast-learning and adapting skills. Experienced in developing databases and desktop software. 
          Acquired Systems/Business Analyst competencies through hands-on experience.
        </p>
        <p>
          Core expertise in: developing desktop applications in <span class="text-slate-200 font-medium">Go, C#, Delphi</span>; 
          designing databases using <span class="text-slate-200 font-medium">IBExpert (FireBird), Red Database</span>; 
          and visual modeling (UML, BPMN, DMN) with Camunda and Mermaid.
        </p>
      </div>

      <!-- Контакты в виде чипсов -->
      <div class="flex flex-wrap gap-3">
        <a href="mailto:vitaliison.tech@gmail.com" class="group flex items-center gap-2 px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-300 text-sm font-medium hover:border-blue-400 hover:text-blue-400 hover:bg-slate-800 transition-all duration-300">
          <span class="text-slate-500 group-hover:text-blue-400 transition-colors" v-html="icons.mail"></span>
          vitaliison.tech@gmail.com
        </a>
        <a href="tel:+79140912992" class="group flex items-center gap-2 px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-300 text-sm font-medium hover:border-blue-400 hover:text-blue-400 hover:bg-slate-800 transition-all duration-300">
          <span class="text-slate-500 group-hover:text-blue-400 transition-colors" v-html="icons.phone"></span>
          +7 914 091 29 92
        </a>
        <a href="https://github.com/ImaSoGood" target="_blank" class="group flex items-center gap-2 px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-300 text-sm font-medium hover:border-blue-400 hover:text-blue-400 hover:bg-slate-800 transition-all duration-300">
          <span class="text-slate-500 group-hover:text-blue-400 transition-colors" v-html="icons.github"></span>
          GitHub
        </a>
        <div class="group flex items-center gap-2 px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-300 text-sm font-medium">
          <span class="text-slate-500" v-html="icons.location"></span>
          Sakhalin, Russia
        </div>
      </div>
    </section>

    <!-- 2. WORK EXPERIENCE (TIMELINE) -->
    <section>
      <h3 class="font-mono text-2xl font-bold text-white mb-10 flex items-center gap-3">
        <span class="text-blue-400 text-xl">01.</span> Work Experience
        <span class="h-px bg-slate-800 flex-1 max-w-xs ml-4"></span>
      </h3>

      <div class="relative border-l-2 border-slate-800 ml-3 md:ml-4 space-y-12">
        <!-- Блок IGS -->
        <div class="relative pl-8 md:pl-12 group">
          <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all duration-300"></div>
          
          <div class="bg-slate-900/40 border border-slate-800 rounded-xl p-6 md:p-8 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] transition-all duration-300">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 class="text-xl font-bold text-white mb-1">Lead Developer & Infrastructure</h4>
                <p class="font-mono text-blue-400 text-sm">IGS (Island General Services)</p>
              </div>
              <span class="font-mono text-slate-500 text-sm mt-2 md:mt-0 bg-slate-800/50 px-3 py-1 rounded-md border border-slate-700">
                Jan 2025 – Present
              </span>
            </div>
            
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                <span>Lead a cross-functional team (3 programmers, 1 BA, plus interns). Task assignment, code review, milestone management, and mentorship.</span>
              </li>
              <li class="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                <span>Transitioned teams to <span class="text-slate-200">YouTrack</span>, established strict Git workflow/code review (GitLab), and introduced Docker.</span>
              </li>
              <li class="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                <span><span class="text-emerald-400 font-semibold">Result:</span> Standardised SDLC, significantly improved code quality, and strengthened system security.</span>
              </li>
              <li class="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                <span>Spearheaded gradual migration of Delphi-based systems to <span class="text-slate-200">Go</span>, improving scalability without disrupting operations.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Блок IT Top College -->
        <div class="relative pl-8 md:pl-12 group">
          <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-500/50 transition-all duration-300"></div>
          
          <div class="bg-slate-900/40 border border-slate-800 rounded-xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 class="text-xl font-bold text-white mb-1">Lecturer (Business Analytics & UML)</h4>
                <p class="font-mono text-blue-400 text-sm">IT Top College</p>
              </div>
              <span class="font-mono text-slate-500 text-sm mt-2 md:mt-0 bg-slate-800/50 px-3 py-1 rounded-md border border-slate-700">
                Sep 2024 – Jan 2025
              </span>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                <span>Delivered a comprehensive course on Business Analytics and UML modeling across 3 student groups.</span>
              </li>
              <li class="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                <span><span class="text-emerald-400 font-semibold">Result:</span> 97% of students successfully passed their exams, demonstrating effective knowledge transfer.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. EDUCATION & ADDITIONAL INFO -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Education -->
      <div class="bg-slate-900/40 border border-slate-800 rounded-xl p-6 md:p-8">
        <h3 class="font-mono text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="text-blue-400">02.</span> Education
        </h3>
        <div class="space-y-4">
          <div>
            <h4 class="text-lg font-semibold text-slate-200">Polytechnic College of Sakhalin</h4>
            <p class="font-mono text-blue-400 text-sm mb-2">Programming in computer systems</p>
            <p class="text-slate-400 text-sm leading-relaxed">
              Graduated as a state-funded (budget) student and merit scholarship recipient. 
              Qualification: «Programmer technician», «Process equipment adjuster».
            </p>
          </div>
        </div>
      </div>

      <!-- Additional Info / Interests -->
      <div class="bg-slate-900/40 border border-slate-800 rounded-xl p-6 md:p-8">
        <h3 class="font-mono text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="text-blue-400">03.</span> Beyond Code
        </h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          I take a systematic approach to problem-solving — from analysis and modeling to implementation, always considering business needs and user experience.
        </p>
        <div class="space-y-3">
          <p class="text-slate-300 text-sm"><span class="text-emerald-400 font-mono mr-2">➜</span> <span class="text-slate-200">Languages:</span> English (Fluent), Russian (Native)</p>
          <p class="text-slate-300 text-sm"><span class="text-emerald-400 font-mono mr-2">➜</span> <span class="text-slate-200">Interests:</span> Snowboarding, building LEGO sets, chess, and billiards</p>
          <p class="text-slate-300 text-sm"><span class="text-emerald-400 font-mono mr-2">➜</span> <span class="text-slate-200">Goal:</span> Grow into a Tech Lead role</p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Дополнительные микро-анимации, если Tailwind не покрывает */
.group:hover .group-hover\:text-blue-400 {
  color: #60a5fa;
}
</style>