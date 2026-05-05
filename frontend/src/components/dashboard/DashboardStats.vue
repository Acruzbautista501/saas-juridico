<template>
  <section class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <!-- Total Clientes -->
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col justify-between h-32 hover:border-blue-600 transition-all group">
      <div class="flex justify-between items-start">
        <span class="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">Total Clientes</span>
        <div class="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors dark:bg-blue-900 dark:text-blue-400">
          <span class="material-symbols-outlined" data-icon="groups">groups</span>
        </div>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ totalClients }}</p>
        <p class="text-xs text-green-600 font-bold flex items-center dark:text-green-400">
          <span class="material-symbols-outlined text-sm mr-1">trending_up</span> +12% este mes
        </p>
      </div>
    </div>
    <!-- Casos Activos -->
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col justify-between h-32 hover:border-blue-600 transition-all group">
      <div class="flex justify-between items-start">
        <span class="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">Casos Activos</span>
        <div class="w-10 h-10 rounded bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors dark:bg-yellow-900 dark:text-yellow-400">
          <span class="material-symbols-outlined" data-icon="folder_special">folder_special</span>
        </div>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ activeCases }}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">24 requieren atención hoy</p>
      </div>
    </div>
    <!-- Eventos Próximos -->
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col justify-between h-32 hover:border-blue-600 transition-all group">
      <div class="flex justify-between items-start">
        <span class="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">Audiencias / Citas</span>
        <div class="w-10 h-10 rounded bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors dark:bg-green-900 dark:text-green-400">
          <span class="material-symbols-outlined" data-icon="event">event</span>
        </div>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ upcomingEventsCount }}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">Próximas 48 horas</p>
      </div>
    </div>
    <!-- Pending Documents -->
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col justify-between h-32 hover:border-blue-600 transition-all group">
      <div class="flex justify-between items-start">
        <span class="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">Por Firmar</span>
        <div class="w-10 h-10 rounded bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors dark:bg-red-900 dark:text-red-400">
          <span class="material-symbols-outlined" data-icon="draw">draw</span>
        </div>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">15</p>
        <p class="text-xs text-red-600 font-bold italic dark:text-red-400">Acción requerida</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  totalClients: number;
  activeCases: number;
  upcomingEventsCount: number;
}

defineProps<Props>();
</script>
