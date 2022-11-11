import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '@/layouts/UserLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'buy-orders',
      component: () => import('@/views/BuyOrdersView.vue'),
      meta: { layout: UserLayout },
    },
    {
      path: '/datasets',
      name: 'datasets',
      component: () => import('@/views/DatasetsView.vue'),
      meta: { layout: UserLayout },
    },
  ],
})

export default router
