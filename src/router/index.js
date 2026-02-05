import { createRouter, createWebHistory } from 'vue-router'
import DayView from '@/views/DayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/day',
      name: 'day',
      component: DayView,
    },
  ],
})

export default router
