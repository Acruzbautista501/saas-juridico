<script setup lang="ts">
import { useDashboard } from "@/composables/useDashboard";
import DashboardStats from "@/components/dashboard/DashboardStats.vue";
import DashboardAgenda from "@/components/dashboard/DashboardAgenda.vue";
import DashboardActivity from "@/components/dashboard/DashboardActivity.vue";
import DashboardSignatureStatus from "@/components/dashboard/DashboardSignatureStatus.vue";

const { data, loading, error } = useDashboard();
</script>

<template>
  <!-- Page Canvas -->
  <main class="p-8 space-y-8 max-w-[1440px] mx-auto">
    <!-- LOADING -->
    <div v-if="loading" class="text-center">
      <div class="animate-pulse">
        <div class="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
        <div class="h-32 bg-gray-200 rounded mb-4"></div>
        <div class="h-64 bg-gray-200 rounded"></div>
      </div>
    </div>

    <!-- ERROR -->
    <div v-if="error" class="text-red-500 text-center bg-red-50 p-4 rounded-lg border border-red-200">
      <span class="material-symbols-outlined text-red-500 mr-2">error</span>
      {{ error }}
    </div>

    <!-- DATA -->
    <div v-if="data" class="space-y-8">
      <!-- Summary Row -->
      <DashboardStats
        :totalClients="data.totalClients"
        :activeCases="data.activeCases"
        :upcomingEventsCount="data.upcomingEvents.length"
      />

      <!-- Dashboard Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <!-- Main Agenda Section -->
        <DashboardAgenda :events="data.upcomingEvents" class="lg:col-span-2" />

        <!-- Activity Sidebar -->
        <aside class="space-y-6">
          <DashboardActivity />
          <DashboardSignatureStatus />
        </aside>
      </div>
    </div>
  </main>
</template>
