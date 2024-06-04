import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../login/index.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/layout/index.vue')
    }
  ]
})

export default router
