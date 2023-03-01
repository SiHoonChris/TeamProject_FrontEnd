import { createRouter, createWebHistory } from 'vue-router'
import Homepage from "../views/HomepageComp.vue"

const routes = [
  { path: "/", name: "Homepage", component: Homepage },
  { path: "/login", name: "Login", component: () => import('../views/LoginPage.vue') }, 
  { path: "/MyPage", name: "Mypage", component: () => import('../views/MyPage.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
