import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/expedientes',
      name: 'expedientes',
      // route level code-splitting
      // this generates a separate chunk (Expedientes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExpedientesView.vue'),
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClientesView.vue'),
    },
    {
      path: '/calendario',
      name: 'calendario',
      component: () => import('../views/CalendarioView.vue'),
    },
    {
      path: '/documentos',
      name: 'documentos',
      component: () => import('../views/DocumentosView.vue'),
    },
    {
      path: '/configuracion',
      name: 'configuracion',
      component: () => import('../views/ConfiguracionView.vue'),
    },
    {
      path: '/soporte',
      name: 'soporte',
      component: () => import('../views/SoporteView.vue'),
    },
  ],
})

export default router
