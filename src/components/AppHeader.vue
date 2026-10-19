<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { name: 'CV', path: '/cv' },
  { name: 'Work', path: '/work' },
  { name: 'Experience', path: '/experience' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-4xl mx-auto px-4 py-4">
      <nav class="flex items-center justify-between">
        <router-link 
          to="/cv" 
          class="font-mono text-xl font-bold text-white hover:text-emerald-400 transition-colors"
        >
          Vitalii Son
        </router-link>

        <div class="flex gap-2">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            :class="route.path === item.path 
              ? 'bg-slate-800 text-emerald-400 border border-slate-700' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'"
          >
            {{ item.name }}
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>