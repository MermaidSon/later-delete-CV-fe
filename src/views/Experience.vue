<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface ResumeItem {
  company: string
  position: string
  period: string
  description: string
  works: string[]
}

const resumes = ref<ResumeItem[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/resume')
    const json = await res.json()
    // Реальная структура: json.data.resume — массив
    resumes.value = json?.data?.resume || json?.data || []
  } catch (error) {
    console.error('Failed to load resume data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="py-16 border-b border-slate-800">
    <div class="max-w-4xl mx-auto px-4">
      <h3 class="font-mono text-2xl font-bold text-white mb-12 flex items-center gap-3">
        <span class="text-blue-400">01.</span> Work Experience
      </h3>

      <div v-if="loading" class="text-center py-8 text-slate-400 font-mono">
        Loading experience...
      </div>

      <div v-else-if="resumes.length === 0" class="text-center py-8 text-slate-500">
        No work experience data available
      </div>

      <div v-else class="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
        <div v-for="(resume, index) in resumes" :key="index" class="relative pl-8 md:pl-12 group">
          
          <!-- Точка на таймлайне -->
          <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-300"></div>

          <!-- Карточка -->
          <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.05)] transition-all duration-300">
            
            <!-- Заголовок -->
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
              <div>
                <h4 class="text-xl font-bold text-white mb-1">{{ resume.position }}</h4>
                <p class="font-mono text-blue-400 text-sm">{{ resume.company }}</p>
              </div>
              <span class="font-mono text-slate-500 text-sm bg-slate-800/50 px-3 py-1 rounded-md whitespace-nowrap">
                {{ resume.period }}
              </span>
            </div>

            <!-- Описание -->
            <p class="text-slate-300 mb-6 leading-relaxed">{{ resume.description }}</p>

            <!-- Список достижений (массив строк) -->
            <ul v-if="resume.works && resume.works.length > 0" class="space-y-3">
              <li v-for="(workText, wIndex) in resume.works" :key="wIndex" class="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                <span v-html="workText.replace(/Result:/gi, '<span class=\'text-emerald-400 font-semibold\'>Result:</span>')"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>