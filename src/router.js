import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetail from '@/views/CardDetail.vue'
import LoginPage from '@/views/LoginPage.vue'  
import SettingsPage from '@/views/SettingsPage.vue'

import { useAuth } from './composables/useAuth' 
const { isAuthenticated } = useAuth()

const routes = [  
  { path: '/Homework5/', name: 'Home', component: HomePage },  
  { path: '/Homework5/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },  
  { path: '/Homework5/employees/:id', name: 'CardDetail', component: CardDetail },  
  { path: '/Homework5/login', name: 'LoginPage', component: LoginPage },  
  { path: '/Homework5/settings', name: 'SettingsPage', component: SettingsPage, meta: { requiresAuth: true } },  
] 

const router = createRouter({  
  history: createWebHistory(),  
  routes,  
})

// Navigation guard to check for authentication
router.beforeEach((to, _, next) => { 
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'LoginPage', query: { redirect: to.fullPath } })
  } else {
    next()
  }

})

export default router
