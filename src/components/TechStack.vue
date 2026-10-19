<script setup lang="ts">
const techCategories = [
  {
    title: 'Backend & Desktop',
    description: 'Developing robust desktop and backend applications with a focus on performance.',
    items: ['Go', 'C#', 'Delphi', 'PHP', 'Laravel'],
    icon: '⚙️'
  },
  {
    title: 'Databases',
    description: 'Designing, administering, and optimizing relational databases for high loads.',
    items: ['FireBird (IBExpert)', 'Red Database', 'PostgreSQL', 'MySQL/SQLite'],
    icon: '🗄️'
  },
  {
    title: 'DevOps & Tools',
    description: 'Ensuring environment consistency, version control, and process management.',
    items: ['Docker', 'Linux (Debian)', 'Git (GitLab)', 'YouTrack'],
    icon: '🚀'
  },
  {
    title: 'Modeling & Docs',
    description: 'Visual modeling and notation design for clear stakeholder alignment.',
    items: ['UML', 'BPMN', 'DMN', 'Camunda', 'Mermaid'],
    icon: '📐'
  }
]
</script>

<template>
  <section class="py-24 px-6 bg-zinc-900/30 border-t border-zinc-800/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Technology Stack</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="(category, index) in techCategories" 
          :key="index"
          class="group relative p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
        >
          <div class="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{{ category.icon }}</div>
          <h3 class="text-xl font-bold text-white mb-3">{{ category.title }}</h3>
          <p class="text-zinc-400 mb-6 leading-relaxed text-sm">{{ category.description }}</p>
          
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in category.items" 
              :key="tech" 
              class="px-3.5 py-1.5 rounded-lg bg-zinc-800/80 text-zinc-300 text-sm font-medium border border-zinc-700 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-all duration-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>