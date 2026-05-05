<template>
  <div class="bg-slate-800 border border-slate-700 rounded-lg shadow p-4 text-white">
    <div class="flex items-center gap-3 mb-4">
      <span class="material-symbols-outlined text-blue-400" data-icon="verified">verified</span>
      <span class="text-xs font-bold uppercase text-slate-400">Estado de la Firma Digital</span>
    </div>
    <div class="bg-slate-700 rounded p-3 border border-slate-600 mb-4">
      <p class="text-xs text-slate-300">Token de seguridad activo. Válido por las próximas 4 horas.</p>
      <div class="mt-3">
        <div class="flex justify-between text-xs text-slate-400 mb-1">
          <span>Progreso</span>
          <span>65%</span>
        </div>
        <div class="w-full bg-slate-600 rounded-full h-1.5">
          <div class="bg-blue-500 h-1.5 rounded-full" style="width: 65%"></div>
        </div>
      </div>
    </div>
    <button class="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-xs font-bold transition-all uppercase tracking-tight">Validar Identidad</button>
  </div>
</template>

<script setup lang="ts">
// No props needed for now
</script>
