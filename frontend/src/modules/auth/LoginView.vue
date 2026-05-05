<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth.store'
import { useThemeStore } from '../../stores/theme.store'

const router = useRouter()
const auth = useAuthStore()
const theme = useThemeStore()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const error = ref('')

const logoSrc = computed(() => theme.isDark ? '/img/logo-dark.png' : '/img/logo-white.png')

const handleLogin = async () => {
  isLoading.value = true
  error.value = ''

  try {
    await auth.login(email.value, password.value)
    await router.push('/')
  } catch (err) {
    error.value = 'Error al iniciar sesión. Verifica tus credenciales.'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-4 relative overflow-hidden">
    <!-- Decorative background blobs -->
    <div class="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-[100px]"></div>
    </div>

    <main class="w-full max-w-sm flex flex-col gap-6">
      <!-- Logo Branding Section -->
      <div class="flex flex-col items-center text-center gap-2">
        <img :src="logoSrc" alt="JurídicoPro MX Logo" class="w-full h-full max-w-xs object-contain">
        <p class="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
          Plataforma Institucional para la Gestión Legal de Alto Nivel
        </p>
      </div>

      <!-- Login Card -->
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border-t-4 border-blue-600 dark:border-blue-500">
        <div class="p-8 flex flex-col gap-6">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between gap-4">
              <div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Acceso al Portal</h2>
                <p class="text-sm text-slate-600 dark:text-slate-400">Ingrese sus credenciales para continuar.</p>
              </div>
            </div>
            <button
              type="button"
              class="inline-flex items-center mt-3 gap-2 w-48 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all"
              @click="theme.toggleTheme"
            >
              <span class="material-symbols-outlined">{{ theme.themeIcon }}</span>
              {{ theme.themeLabel }}
            </button>
          </div>

          <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
            <!-- Email Input -->
            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 tracking-wider" for="email">
                Correo Electrónico Institucional
              </label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-600 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                  <span class="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="ejemplo@juridico.com.mx"
                  class="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/20 dark:focus:ring-blue-400/20 focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  required
                />
              </div>
            </div>

            <!-- Password Input -->
            <div class="flex flex-col gap-1">
              <div class="flex justify-between items-center">
                <label class="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 tracking-wider" for="password">
                  Contraseña
                </label>
                <a href="#" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline transition-all">
                  ¿Olvidó su contraseña?
                </a>
              </div>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-600 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                  <span class="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                  class="w-full pl-12 pr-12 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/20 dark:focus:ring-blue-400/20 focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  required
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
                >
                  <span class="material-symbols-outlined text-[20px]">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                </button>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] mt-2"
            >
              <span>{{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}</span>
              <span class="material-symbols-outlined">{{ isLoading ? 'hourglass_empty' : 'login' }}</span>
            </button>
          </form>

          <!-- Divider -->
          <!-- <div class="relative flex items-center py-2">
            <div class="grow border-t border-slate-300 dark:border-slate-600"></div>
            <span class="shrink mx-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">O Acceda Con</span>
            <div class="grow border-t border-slate-300 dark:border-slate-600"></div>
          </div> -->

          <!-- Secondary Auth Actions -->
          <!-- <div class="grid grid-cols-2 gap-4">
            <button
              type="button"
              class="flex items-center justify-center gap-2 py-2 px-4 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors font-semibold text-sm text-slate-700 dark:text-slate-300"
            >
              <span class="material-symbols-outlined text-[18px]">fingerprint</span>
              <span>Biometría</span>
            </button>
            <button
              type="button"
              class="flex items-center justify-center gap-2 py-2 px-4 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors font-semibold text-sm text-slate-700 dark:text-slate-300"
            >
              <span class="material-symbols-outlined text-[18px]">key</span>
              <span>Token</span>
            </button>
          </div> -->
        </div>

        <!-- Registration Footer -->
        <div class="bg-slate-50 dark:bg-slate-700/50 p-4 border-t border-slate-300 dark:border-slate-600 flex items-center justify-center gap-2">
          <span class="text-sm text-slate-600 dark:text-slate-400">¿Aún no tiene una cuenta corporativa?</span>
          <a href="#" class="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">Registrarse</a>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg text-sm">
        {{ error }}
      </div>

      <!-- Support Info -->
      <div class="flex flex-col items-center gap-2 opacity-60 dark:opacity-50">
        <div class="flex gap-6 text-xs font-medium">
          <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Términos de Servicio</a>
          <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Aviso de Privacidad</a>
          <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Soporte Técnico</a>
        </div>
        <p class="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-600">
          © 2024 JurídicoPro MX. Todos los derechos reservados.
        </p>
      </div>
    </main>
  </div>
</template>
