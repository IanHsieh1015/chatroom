import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Chat from '../components/Chat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    }
  ]
})

export default router
