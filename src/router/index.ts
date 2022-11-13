import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '@/layouts/UserLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'buy-orders',
    },
    {
      path: '/buy-orders',
      name: 'buy-orders',
      component: () => import('@/views/BuyOrdersView.vue'),
      meta: { layout: UserLayout },
    },
    {
      path: '/buy-orders/:id',
      name: 'buy-order',
      component: () => import('@/views/BuyOrderDetailsView.vue'),
      meta: { layout: UserLayout },
      props: true,
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
