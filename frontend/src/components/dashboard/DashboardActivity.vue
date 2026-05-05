<template>
  <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="px-4 py-3 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <h3 class="text-xs font-bold text-gray-900 dark:text-white uppercase">Actividad Reciente</h3>
    </div>
    <div class="p-4 relative">
      <div class="absolute left-9 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-600"></div>
      <div class="space-y-6">
        <div class="relative flex items-start gap-4 pl-14">
          <div class="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border border-white dark:bg-blue-900 dark:text-blue-400 dark:border-gray-800">
            <span class="material-symbols-outlined text-sm" data-icon="upload_file">upload_file</span>
          </div>
          <div class="flex-1">
            <p class="text-sm text-gray-900 dark:text-white"><span class="font-bold">Lic. Marina Soto</span> subió un nuevo documento al expediente <span class="text-blue-600 dark:text-blue-400 font-medium">#529-B</span></p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase font-semibold">hace 12 minutos</p>
          </div>
        </div>

        <div class="relative flex items-start gap-4 pl-14">
          <div class="absolute left-0 top-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 border border-white dark:bg-green-900 dark:text-green-400 dark:border-gray-800">
            <span class="material-symbols-outlined text-sm" data-icon="history_edu">history_edu</span>
          </div>
          <div class="flex-1">
            <p class="text-sm text-gray-900 dark:text-white">Estatus actualizado: <span class="font-bold text-green-700 dark:text-green-400">Sentencia Favorable</span> para cliente G. Herrera</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase font-semibold">hace 45 minutos</p>
          </div>
        </div>

        <div class="relative flex items-start gap-4 pl-14">
          <div class="absolute left-0 top-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 border border-white dark:bg-yellow-900 dark:text-yellow-400 dark:border-gray-800">
            <span class="material-symbols-outlined text-sm" data-icon="mail">mail</span>
          </div>
          <div class="flex-1">
            <p class="text-sm text-gray-900 dark:text-white">Notificación electrónica recibida de <span class="font-bold">SAT Jurídico</span></p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase font-semibold">hace 2 horas</p>
          </div>
        </div>

        <div class="relative flex items-start gap-4 pl-14">
          <div class="absolute left-0 top-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 border border-white dark:bg-gray-700 dark:text-gray-400 dark:border-gray-800">
            <span class="material-symbols-outlined text-sm" data-icon="edit">edit</span>
          </div>
          <div class="flex-1">
            <p class="text-sm text-gray-900 dark:text-white">Nota interna añadida por <span class="font-bold">Pasante Juan P.</span></p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase font-semibold">hace 3 horas</p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-3 text-center border-t border-gray-200 dark:border-gray-600">
      <button class="text-xs font-bold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors uppercase tracking-wider">Ver todo el historial</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed for now, as it's static
</script>
