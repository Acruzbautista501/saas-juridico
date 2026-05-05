<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Eventos y Documentos</h2>
    <p class="mt-2 text-slate-600 dark:text-slate-400">Gestión de calendario, eventos y documentos</p>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Calendar Section -->
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          <span class="material-symbols-outlined inline mr-2">calendar_month</span>
          Calendario
        </h3>
        <p class="text-slate-600 dark:text-slate-400">Gestión de eventos y citas</p>
        <!-- Calendar content will go here -->
      </div>

      <!-- Documents Section -->
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          <span class="material-symbols-outlined inline mr-2">description</span>
          Documentos
        </h3>
        <p class="text-slate-600 dark:text-slate-400">Gestión de documentos y archivos</p>
        <!-- Documents content will go here -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Events & Documents module
</script>
