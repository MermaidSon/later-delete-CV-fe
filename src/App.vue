<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-300 font-sans">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    
    <footer class="border-t border-slate-800 mt-20 py-8">
      <div class="max-w-4xl mx-auto px-4 text-center text-sm text-slate-500">
        <p>© {{ new Date().getFullYear() }} Vitalii Son. Backend Developer & Systems Analyst</p>
      </div>
    </footer>
  </div>
</template>