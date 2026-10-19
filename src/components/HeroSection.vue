<script setup lang="ts">
import { ref, onMounted } from 'vue'

const owner = ref<any>(null)
const contacts = ref<any[]>([])

const fallbackContacts = [
  { platform: 'Email', link: 'mailto:vitaliison.tech@gmail.com', text: 'vitaliison.tech@gmail.com' },
  { platform: 'Phone', link: 'tel:+79140912992', text: '+7 914 091 29 92' },
  { platform: 'GitHub', link: 'https://github.com/ImaSoGood', text: 'github.com/ImaSoGood' },
  { platform: 'Location', link: '#', text: 'Sakhalin, Russia' }
]

onMounted(async () => {
  try {
    const ownerRes = await fetch('http://127.0.0.1:8000/api/owner').then(r => r.json()).catch(() => null)
    owner.value = ownerRes

    // Явно указываем тип any, чтобы TypeScript не ругался на .data
    const contactsRes: any = await fetch('http://127.0.0.1:8000/api/contacts').then(r => r.json()).catch(() => null)
    contacts.value = contactsRes?.data || contactsRes || []
  } catch (e) {
    console.error('Failed to load data', e)
    contacts.value = fallbackContacts
  }
})

const icons: Record<string, string> = {
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
}
</script>

<template>
  <section class="py-16 md:py-24 border-b border-slate-800">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="font-mono text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
        {{ owner?.name || 'Vitalii Son' }}
      </h1>
      <h2 class="font-mono text-xl md:text-2xl text-emerald-400 mb-8">
        {{ owner?.position || 'Backend Developer & Systems Analyst' }}
      </h2>

      <p class="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
        Backend developer with fast-learning and adapting skills. Experienced in developing databases and desktop software. 
        Acquired Systems/Business Analyst competencies through hands-on experience. Core expertise in Go, C#, Delphi, 
        FireBird, and visual modeling (UML, BPMN, DMN).
      </p>

      <div class="flex flex-wrap gap-3">
        <a 
          v-for="(contact, index) in (contacts.length ? contacts : fallbackContacts)" 
          :key="index" 
          :href="contact.link || '#'" 
          target="_blank"
          class="group flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:border-blue-400 hover:text-blue-400 hover:bg-slate-800 transition-all duration-300"
        >
          <span class="text-slate-500 group-hover:text-blue-400 transition-colors" v-html="icons[contact.platform.toLowerCase()] || icons.mail"></span>
          {{ contact.text }}
        </a>
      </div>
    </div>
  </section>
</template>