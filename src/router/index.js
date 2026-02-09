import { createRouter, createWebHistory } from 'vue-router'
import DayView from '@/views/DayView.vue'
import AlertView from '@/views/AlertView.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Sigin from '@/views/Sigin.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/day',
      name: 'day',
      component: DayView,
    },
    {
      path: '/alert',
      name: 'alert',
      component: AlertView,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/sigin',
      name: 'sigin',
      component: Sigin,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
