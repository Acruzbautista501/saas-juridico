import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.store'

const routes = [
  {
    path: '/login',
    component: () => import('../modules/auth/LoginView.vue'),
  },
  {
    path: '/',
    component: () => import('../layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../modules/dashboard/DashboardView.vue'),
      },
      {
        path: 'clients',
        component: () => import('../modules/clients/ClientsView.vue'),
      },
      {
        path: 'cases',
        component: () => import('../modules/cases/CasesView.vue'),
      },
      {
        path: 'events',
        component: () => import('../modules/events/EventsView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🔐 Auth Guard
router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.path !== '/login' && !auth.token) {
    return '/login'
  }
})

export default router

