import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Categories from './components/Categories.vue'
import Findmeal from './components/Findmeal.vue'
import CategoryItems from './components/CategoryItems.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/categories', name: 'Categories', component: Categories },
  { path: '/categories/:strName', name: 'CategoryItems', component: CategoryItems, props: true,},
  { path: '/findmeal', name: 'Findmeal', component: Findmeal },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
