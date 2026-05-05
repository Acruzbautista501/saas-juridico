<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useThemeStore } from '../stores/theme.store'

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

const sidebarOpen = ref(false)
const theme = useThemeStore()

const toggleTheme = () => theme.toggleTheme()
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
const closeSidebar = () => {
  sidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen flex transition-colors duration-300 bg-slate-50 dark:bg-slate-900">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed inset-y-0 left-0 z-50 flex h-full w-65 flex-col border-r border-slate-800 bg-[#1e293b] py-6 transition-transform duration-300',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'min-[992px]:translate-x-0',
      ]"
    >
      <!-- Brand -->
      <div class="px-6 mb-8">
        <div class="flex items-center gap-3 mb-1">
          <img src="/img/logo-dark.png" alt="JurídicoPro MX Logo" class="w-auto">
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-3 space-y-1 overflow-y-auto">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          v-slot="{ isActive, isExactActive, navigate }"
          :to="item.to"
          custom
        >
          <a
            @click="navigate(); closeSidebar()"
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

      <div class="px-3 mt-4">
        <button
          type="button"
          class="flex w-full items-center justify-between gap-2 rounded-sm px-3 py-2 text-sm font-semibold transition-colors duration-300 bg-slate-800/50 text-slate-100 hover:bg-slate-700/70"
          @click="toggleTheme"
        >
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined">{{ theme.themeIcon }}</span>
            {{ theme.themeLabel }}
          </span>
        </button>
      </div>

      <!-- Bottom section -->
      <div class="px-3 mt-auto pt-4">
        <RouterLink to="/soporte" v-slot="{ isActive, navigate }" custom>
          <a
            @click="navigate(); closeSidebar()"
            class="flex items-center gap-3 px-3 py-2 text-sm font-medium tracking-tight transition-colors cursor-pointer rounded-sm"
            :class="isActive ? 'border-l-4 border-blue-500 bg-slate-800/50 text-white' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/30'"
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
              class="w-8 h-8 rounded-full border border-slate-600 object-cover shrink-0"
            />
            <div class="overflow-hidden">
              <p class="text-xs font-bold truncate text-white">{{ currentUser.name }}</p>
              <p class="text-[10px] truncate text-slate-400">{{ currentUser.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <div v-if="sidebarOpen" class="fixed inset-0 z-40 bg-slate-950/40 min-[992px]:hidden" @click="closeSidebar" />

    <!-- Main content -->
    <main class="flex-1 min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white min-[992px]:ml-65">
      <!-- Mobile Header -->
      <header class="min-[992px]:hidden flex items-center justify-between p-4 border-b border-slate-700/50 bg-[#1e293b] backdrop-blur-sm sticky top-0 z-40">
        <div class="flex items-center gap-3">
          <img src="/img/logo-dark.png"  alt="Logo" class="h-8 w-auto" />
        </div>
        <button
          type="button"
          class="p-2 text-slate-100 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
          @click="toggleSidebar"
        >
          <span class="material-symbols-outlined text-2xl">{{ sidebarOpen ? 'close' : 'menu' }}</span>
        </button>
      </header>
      <!-- Desktop Header -->
      <header class="h-16 w-full sticky top-0 z-40 hidden min-[992px]:flex justify-between items-center px-8 transition-colors duration-300 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div class="flex items-center gap-4 flex-1">
          <div class="relative w-96">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400 dark:text-slate-500">search</span>
            <input class="w-full pl-10 pr-4 py-2 border-none rounded focus:ring-2 focus:ring-blue-600/20 text-body-sm transition-all bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400" placeholder="Buscar expedientes, clientes o folios..." type="text"/>
          </div>
          <div class="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
          <span class="font-[Inter] font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Portal de Justicia</span>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-4">
            <button class="relative hover:text-blue-600 transition-colors text-slate-500 dark:text-slate-400">
              <span class="material-symbols-outlined">notifications</span>
              <span class="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full border-2 border-white dark:border-slate-800"></span>
            </button>
            <button class="hover:text-blue-600 transition-colors text-slate-500 dark:text-slate-400">
              <span class="material-symbols-outlined">history</span>
            </button>
            <button class="hover:text-blue-600 transition-colors text-slate-500 dark:text-slate-400">
              <span class="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </header>
      <RouterView />
    </main>
  </div>
</template>
