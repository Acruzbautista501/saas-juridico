import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type ThemeMode = 'light' | 'dark'

const getInitialTheme = (): ThemeMode => {
  const saved = localStorage.getItem('theme')
  return saved === 'dark' ? 'dark' : 'light'
}

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<ThemeMode>(getInitialTheme())
  const isDark = computed(() => theme.value === 'dark')
  const themeIcon = computed(() => (theme.value === 'dark' ? 'light_mode' : 'dark_mode'))
  const themeLabel = computed(() => (theme.value === 'dark' ? 'Modo claro' : 'Modo oscuro'))

  const applyTheme = (nextTheme: ThemeMode) => {
    theme.value = nextTheme
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    localStorage.setItem('theme', nextTheme)
  }

  const initializeTheme = () => {
    applyTheme(theme.value)
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    isDark,
    themeIcon,
    themeLabel,
    initializeTheme,
    applyTheme,
    toggleTheme,
  }
})
