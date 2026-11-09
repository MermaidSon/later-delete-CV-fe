<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToExperience = () => {
  router.push('/experience');
};

// --- Download CV ---
const CV_FILENAME = 'CV Vitalii Son.docx';
const API_BASE = import.meta.env.VITE_API_URL ?? 'http://2.27.194.49/api';
// статический файл должен лежать в public/cv/ на фронтенде
const STATIC_CV_URL = `${import.meta.env.BASE_URL}cv/${encodeURIComponent(CV_FILENAME)}`;

const isDownloading = ref(false);

async function downloadCv() {
  if (isDownloading.value) return;
  isDownloading.value = true;
  try {
    // 1. Сначала пробуем скачать с бэкенда: GET {API}/resume/download
    let blob: Blob | null = null;
    try {
      const res = await fetch(`${API_BASE}/resume/download`);
      if (res.ok) blob = await res.blob();
    } catch {
      /* сервер недоступен — переходим к статике */
    }

    // 2. Фолбэк — статический файл из public/cv/
    if (!blob || blob.size === 0) {
      const res = await fetch(STATIC_CV_URL);
      if (!res.ok) throw new Error('CV file not found');
      blob = await res.blob();
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = CV_FILENAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (e) {
    console.error('Failed to download CV:', e);
    alert('Could not download the CV right now. Please try again later.');
  } finally {
    isDownloading.value = false;
  }
}

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

        <button
          @click="downloadCv"
          :disabled="isDownloading"
          class="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-semibold transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" /></svg>
          {{ isDownloading ? 'Downloading…' : 'Download CV' }}
        </button>
        
        <a href="mailto:vitaliison.tech@gmail.com" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-semibold transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          Contact Me
        </a>

        <a href="https://github.com/MermaidSon" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-semibold transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>