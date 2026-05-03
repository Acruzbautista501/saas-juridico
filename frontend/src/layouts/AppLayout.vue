<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
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

const theme = ref<'light' | 'dark'>('dark')
const isDark = computed(() => theme.value === 'dark')

const applyTheme = (nextTheme: 'light' | 'dark') => {
  theme.value = nextTheme
  document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  localStorage.setItem('theme', nextTheme)
}

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme)
    return
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(prefersDark ? 'dark' : 'light')
}

const toggleTheme = () => applyTheme(isDark.value ? 'light' : 'dark')

onMounted(initializeTheme)
</script>

<template>
  <div :class="['min-h-screen flex transition-colors duration-300', isDark ? 'bg-slate-900' : 'bg-slate-50']">
    <!-- Sidebar -->
    <aside
      :class="[
        'w-[260px] h-screen border-r fixed left-0 top-0 flex flex-col py-6 z-50 transition-colors duration-300',
        isDark ? 'border-slate-800 bg-[#1e293b]' : 'border-slate-200 bg-white',
      ]"
    >
      <!-- Brand -->
      <div class="px-6 mb-8">
        <div class="flex items-center gap-3 mb-1">
          <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span
              class="material-symbols-outlined text-[18px]"
              :class="isDark ? 'text-white' : 'text-slate-900'"
              style="font-variation-settings: 'FILL' 1;"
            >
              account_balance
            </span>
          </div>
          <h1 :class="['text-lg font-bold tracking-tight', isDark ? 'text-white' : 'text-slate-900']">JurídicoPro MX</h1>
        </div>
        <p :class="['text-[11px] font-semibold uppercase tracking-widest px-1', isDark ? 'text-slate-400' : 'text-slate-500']">Gestión Institucional</p>
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
                ? isDark
                  ? 'border-l-4 border-blue-500 bg-slate-800/50 text-white'
                  : 'border-l-4 border-blue-500 bg-slate-200 text-slate-900'
                : isDark
                  ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
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
          class="flex w-full items-center justify-between gap-2 rounded-sm px-3 py-2 text-sm font-semibold transition-colors duration-300"
          :class="isDark ? 'bg-slate-800/50 text-slate-100 hover:bg-slate-700/70' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'"
          @click="toggleTheme"
        >
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined">{{ isDark ? 'light_mode' : 'dark_mode' }}</span>
            {{ isDark ? 'Modo claro' : 'Modo oscuro' }}
          </span>
          <span class="text-[11px] tracking-widest uppercase">{{ isDark ? 'CLARO' : 'OSCURO' }}</span>
        </button>
      </div>

      <!-- Bottom section -->
      <div class="px-3 mt-auto pt-4">
        <RouterLink to="/soporte" v-slot="{ isActive, navigate, href }" custom>
          <a
            :href="href"
            @click="navigate"
            :class="[
              'flex items-center gap-3 px-3 py-2 text-sm font-medium tracking-tight transition-colors cursor-pointer rounded-sm',
              isActive
                ? isDark
                  ? 'border-l-4 border-blue-500 bg-slate-800/50 text-white'
                  : 'border-l-4 border-blue-500 bg-slate-200 text-slate-900'
                : isDark
                  ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
            ]"
          >
            <span class="material-symbols-outlined text-[20px]">help_center</span>
            Soporte
          </a>
        </RouterLink>

        <div :class="['mt-3 p-4 rounded transition-colors duration-300', isDark ? 'bg-slate-800/40 border border-slate-700/50' : 'bg-slate-100 border border-slate-200']">
          <div class="flex items-center gap-3">
            <img
              :src="currentUser.avatar"
              :alt="currentUser.name"
              class="w-8 h-8 rounded-full border object-cover flex-shrink-0"
              :class="isDark ? 'border-slate-600' : 'border-slate-200'"
            />
            <div class="overflow-hidden">
              <p :class="['text-xs font-bold truncate', isDark ? 'text-white' : 'text-slate-900']">{{ currentUser.name }}</p>
              <p :class="['text-[10px] truncate', isDark ? 'text-slate-400' : 'text-slate-500']">{{ currentUser.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <main :class="['ml-[260px] flex-1 min-h-screen transition-colors duration-300', isDark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900']">
      <RouterView />
    </main>
  </div>
</template>
