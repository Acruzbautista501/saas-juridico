<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

interface NavItem {
  label: string
  icon: string
  to: string
  exact?: boolean
}

interface User {
  name: string
  role: string
  avatar: string
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', to: '/', exact: true },
  { label: 'Expedientes', icon: 'folder_special', to: '/expedientes' },
  { label: 'Clientes', icon: 'groups', to: '/clientes' },
  { label: 'Calendario', icon: 'calendar_month', to: '/calendario' },
  { label: 'Documentos', icon: 'description', to: '/documentos' },
  { label: 'Configuración', icon: 'settings', to: '/configuracion' },
]

const currentUser: User = {
  name: 'Lic. Arturo Guzmán',
  role: 'Socio Senior',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgWWb0BCeUaXvx5uKsx8vFIGmyLoMskE5DrrbjHp09AkyhPh8Bk8yfxK1z8MEXuI-M92can9osxyVIDGB-Q6osHVh442KurRb8Hpz54a1821RRNYxbvCF3hWUothVSs9jdWGHFoSP5_InUotczLiFPKSDoBrvSu7Qu6VWuVidQHv0cdOn6pv1QYK-PiNX8ppU_LVMol5pkwzW52528BAajp4TdITXfzeEYRew7roeuWeeaoiNX_HWmVtb-H7w6zu8crizRipSk5dc',
}
</script>

<template>
  <div class="min-h-screen bg-slate-900 flex">
    <!-- Sidebar -->
    <aside class="w-[260px] h-screen border-r border-slate-800 fixed left-0 top-0 bg-[#1e293b] flex flex-col py-6 z-50">
      <!-- Brand -->
      <div class="px-6 mb-8">
        <div class="flex items-center gap-3 mb-1">
          <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-[18px]" style="font-variation-settings: 'FILL' 1;">
              account_balance
            </span>
          </div>
          <h1 class="text-lg font-bold text-white tracking-tight">JurídicoPro MX</h1>
        </div>
        <p class="text-slate-400 text-[11px] font-semibold uppercase tracking-widest px-1">Gestión Institucional</p>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-3 space-y-1 overflow-y-auto">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          v-slot="{ isActive, isExactActive, navigate, href }"
          :to="item.to"
          custom
        >
          <a
            :href="href"
            @click="navigate"
            :class="[
              'flex items-center gap-3 px-3 py-2 text-sm font-medium tracking-tight transition-colors cursor-pointer rounded-sm',
              (item.exact ? isExactActive : isActive)
                ? 'border-l-4 border-blue-500 bg-slate-800/50 text-white'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/30',
            ]"
          >
            <span class="material-symbols-outlined text-[20px]">{{ item.icon }}</span>
            {{ item.label }}
          </a>
        </RouterLink>
      </nav>

      <!-- Bottom section -->
      <div class="px-3 mt-auto pt-4">
        <RouterLink to="/soporte" v-slot="{ isActive, navigate, href }" custom>
          <a
            :href="href"
            @click="navigate"
            :class="[
              'flex items-center gap-3 px-3 py-2 text-sm font-medium tracking-tight transition-colors cursor-pointer rounded-sm',
              isActive
                ? 'border-l-4 border-blue-500 bg-slate-800/50 text-white'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/30',
            ]"
          >
            <span class="material-symbols-outlined text-[20px]">help_center</span>
            Soporte
          </a>
        </RouterLink>

        <div class="mt-3 p-4 rounded bg-slate-800/40 border border-slate-700/50">
          <div class="flex items-center gap-3">
            <img
              :src="currentUser.avatar"
              :alt="currentUser.name"
              class="w-8 h-8 rounded-full border border-slate-600 object-cover flex-shrink-0"
            />
            <div class="overflow-hidden">
              <p class="text-xs font-bold text-white truncate">{{ currentUser.name }}</p>
              <p class="text-[10px] text-slate-400 truncate">{{ currentUser.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <main class="ml-[260px] flex-1 min-h-screen bg-slate-900 text-white">
      <RouterView />
    </main>
  </div>
</template>
