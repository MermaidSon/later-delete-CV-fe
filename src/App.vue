<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { onMounted } from 'vue'
import { store } from '@/stores/store'
import { getExperienceData, getOwnerData, getResumeData, getWorkData } from '@/api/apiRoutes'

onMounted(async () => {
  if (!store.ownerLoaded) {
    const ownerResp = await getOwnerData()
    if (ownerResp.success) store.setOwner(ownerResp.data?.owner)
  }

  if (!store.resumeLoaded) {
    const resumeResp = await getResumeData()
    if (resumeResp.success) store.setResume(resumeResp.data)
  }

  if (!store.workLoaded) {
    const workData = await getWorkData()
    if (workData.success) store.setWork(workData.data)
  }

  if (!store.experienceLoaded) {
    const experienceData = await getExperienceData()
    if (experienceData.success) store.setExperience(experienceData.data)
  }
})
</script>

<template>
  <div id="app">
    <!-- Фоновая инженерная сетка -->
    <div class="bg-grid"></div>
    
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Глобальные стили для тёмной темы Modern Engineering */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #020617; /* slate-950 */
  color: #cbd5e1; /* slate-300 */
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

/* Инженерная фоновая сетка с затуханием */
.bg-grid {
  position: fixed;
  inset: 0;
  z-index: -1;
  background-image: 
    linear-gradient(to right, #1e293b 1px, transparent 1px),
    linear-gradient(to bottom, #1e293b 1px, transparent 1px);
  background-size: 4rem 4rem;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%);
  opacity: 0.4;
  pointer-events: none;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* Убираем старые светлые стили, если они где-то остались */
.content-wrapper {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
}
</style>