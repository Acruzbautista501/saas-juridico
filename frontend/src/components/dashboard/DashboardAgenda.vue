<template>
  <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="px-4 py-3 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 flex justify-between items-center">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
        Agenda del Día
      </h2>

      <button class="text-xs font-bold no-underline text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center hover:no-underline">
        Ver calendario completo
        <span class="material-symbols-outlined text-sm ml-1">
          chevron_right
        </span>
      </button>
    </div>
    <div class="divide-y divide-gray-200 dark:divide-gray-600">
      <!-- Agenda Items -->
      <div
        v-for="event in events.slice(0, 4)"
        :key="event._id"
        class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-start gap-4"
      >
        <div class="w-20 pt-1 shrink-0">
          <p class="text-sm font-bold text-gray-900 dark:text-white text-right">{{ formatTime(event.date) }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 text-right">60 min</p>
        </div>
        <div class="w-1 h-12 bg-blue-600 rounded-full shrink-0"></div>
        <div class="flex-1">
          <div class="flex justify-between">
            <h4 class="text-base font-semibold text-gray-900 dark:text-white">{{ event.title }}</h4>
            <span class="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs font-bold rounded uppercase">Juzgado Civil</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Caso: {{ event.caseId.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Event {
  _id: string;
  title: string;
  date: string;
  caseId: {
    title: string;
  };
}

interface Props {
  events: Event[];
}

const props = defineProps<Props>();

const formatTime = (date: string) => {
  return new Date(date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
};
</script>
