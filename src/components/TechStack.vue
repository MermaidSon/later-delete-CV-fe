<script setup lang="ts">
import { ref, onMounted } from 'vue'

const technologies = ref<any[]>([])

onMounted(async () => {
  const res = await fetch('http://127.0.0.1:8000/api/technologies')
  const data = await res.json()
  technologies.value = data.data || data
})
</script>

<template>
  <section class="py-16 border-b border-slate-800">
    <div class="max-w-4xl mx-auto px-4">
      <h3 class="font-mono text-2xl font-bold text-white mb-12 flex items-center gap-3">
        <span class="text-blue-400">02.</span> Tech Stack & Expertise
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="tech in technologies" :key="tech.id" class="bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
          <h4 class="font-mono text-lg font-bold text-white mb-2">{{ tech.title }}</h4>
          <p class="text-slate-400 text-sm mb-4 leading-relaxed">{{ tech.description }}</p>
          
          <div class="flex flex-wrap gap-2">
            <span v-for="(item, i) in JSON.parse(tech.items || '[]')" :key="i" 
                  class="font-mono text-xs md:text-sm px-3 py-1.5 bg-slate-800 text-emerald-400 rounded-md border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all cursor-default">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>