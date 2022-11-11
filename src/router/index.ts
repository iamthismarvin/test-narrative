import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'buy-orders',
      component: () => import('@/views/BuyOrdersView.vue'),
    },
    {
      path: '/datasets',
      name: 'datasets',
      component: () => import('@/views/DatasetsView.vue'),
    },
  ],
})

export default router
