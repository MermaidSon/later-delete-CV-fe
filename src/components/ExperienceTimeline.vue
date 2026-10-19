<script setup lang="ts">
const experiences = [
  {
    role: 'Lead Developer',
    company: 'IGS (Island General Services)',
    period: 'Jan 2025 – Present',
    link: 'https://igsdv.com',
    achievements: [
      { 
        title: 'Leadership & Infrastructure', 
        desc: 'Lead a cross-functional team (3 programmers, 1 BA, plus interns). Task assignment, code review, milestone management, and mentorship. Hands-on backend development, DB administration, and Linux (Debian) server administration.' 
      },
      { 
        title: 'Engineering Culture', 
        desc: 'Transitioned teams to YouTrack. Established strict Git workflow standards, code review practices, and introduced Docker. Result: Standardised SDLC, improved code quality, and strengthened system security.' 
      },
      { 
        title: 'Logistics Automation', 
        desc: 'Developed International and Ground Transportation modules, automating end-to-end processes. Result: Optimised fleet resource utilisation and significantly reduced order processing time.' 
      },
      { 
        title: 'Legacy Modernisation', 
        desc: 'Spearheaded gradual migration of Delphi-based systems to Go. Result: Modernised architecture and improved scalability without disrupting business operations.' 
      },
      { 
        title: 'Database Administration', 
        desc: 'Designed and administered databases in IBExpert (FireBird). Successfully executed migration from version 3.0 to 5.0 after attending FireBird Conf 2026.' 
      }
    ],
    current: true
  },
  {
    role: 'Lecturer (Business Analytics & UML)',
    company: 'IT Top College',
    period: 'Sep 2024 – Jan 2025',
    link: 'https://top-academy.ru',
    achievements: [
      { 
        title: 'Teaching & Mentoring', 
        desc: 'Delivered a comprehensive course on Business Analytics and UML modeling across 3 student groups, including lectures, hands-on labs, and examinations.' 
      },
      { 
        title: 'Measurable Result', 
        desc: '97% of students successfully passed their exams, demonstrating effective knowledge transfer and mentoring capabilities.' 
      }
    ],
    current: false
  },
  {
    role: 'Programmer Technician',
    company: 'Polytechnic College of Sakhalin',
    period: '2020 – 2024',
    link: 'http://ptksakhgu.ru/',
    achievements: [
      { 
        title: 'Education', 
        desc: 'State University «Programming in computer systems», full-time study. Graduated as a state-funded (budget) student and merit scholarship recipient.' 
      }
    ],
    current: false
  }
]
</script>

<template>
  <section class="py-24 px-6 bg-zinc-950">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">Work Experience</h2>
      
      <div class="relative space-y-12">
        <!-- Вертикальная линия таймлайна -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-zinc-800 to-transparent md:-translate-x-1/2" />

        <div v-for="(exp, index) in experiences" :key="index" class="relative flex flex-col md:flex-row gap-8 items-start group">
          <!-- Точка на линии -->
          <div class="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 md:-translate-x-1/2 mt-1.5 z-10 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-300" />
          
          <!-- Левая колонка: Дата и Компания -->
          <div class="md:w-1/2 md:text-right md:pr-12 pl-12 md:pl-0">
            <span class="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-indigo-400 mb-2">
              {{ exp.period }}
            </span>
            <a v-if="exp.link" :href="exp.link" target="_blank" class="block text-zinc-500 hover:text-indigo-400 text-sm transition-colors">
              {{ exp.company }} ↗
            </a>
          </div>
          
          <!-- Правая колонка: Описание достижений -->
          <div class="md:w-1/2 md:pl-12 pl-12 w-full">
            <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-indigo-500/30 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5">
              <h3 class="text-xl font-bold text-white mb-4">{{ exp.role }}</h3>
              
              <ul class="space-y-4">
                <li v-for="(item, i) in exp.achievements" :key="i" class="text-sm md:text-base text-zinc-300 leading-relaxed">
                  <span class="font-semibold text-zinc-100">{{ item.title }}:</span> {{ item.desc }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>