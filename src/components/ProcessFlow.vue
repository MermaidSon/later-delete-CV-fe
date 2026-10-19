<template>
  <section class="py-20 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-12 tracking-tight">My Systematic Approach</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Линия соединения (для десктопа) -->
        <div class="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -z-10" />

        <!-- Step 1 -->
        <div class="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-indigo-900/20 flex items-center justify-center text-2xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            🔍
          </div>
          <h3 class="text-xl font-semibold mb-3">Analysis</h3>
          <p class="text-zinc-400 text-sm leading-relaxed">
            Deep dive into business needs. Identifying core problems and stakeholder requirements before writing a single line of code.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-900/20 flex items-center justify-center text-2xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            📐
          </div>
          <h3 class="text-xl font-semibold mb-3">Modeling</h3>
          <p class="text-zinc-400 text-sm leading-relaxed">
            Designing architecture end-to-end using UML, BPMN, and DMN. Visualizing logic with Mermaid and Camunda for clarity.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-900/20 flex items-center justify-center text-2xl text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            ⚙️
          </div>
          <h3 class="text-xl font-semibold mb-3">Implementation</h3>
          <p class="text-zinc-400 text-sm leading-relaxed">
            Robust development in Go, C#, or Delphi. Focus on scalability, clean code, and seamless user experience.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>