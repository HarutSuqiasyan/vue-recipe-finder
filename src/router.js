import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Categories from './components/Categories.vue'
import Findmeal from './components/Findmeal.vue'
import CategoryItems from './components/CategoryItems.vue'
import GetMealById from './components/GetMealById.vue'
import MealById from './components/MealById.vue'
import GetMealByIngredient from './components/GetMealByIngredient.vue'
import MealByIngredient from './components/MealByIngredient.vue'
import GetMealRandom from './components/GetMealRandom.vue'
import RandomMeal from './components/RandomMeal.vue'
import GetMealByArea from './components/GetMealByArea.vue'
import MealByArea from './components/MealByArea.vue'
import GetMealByName from './components/GetMealByName.vue'
import MealByName from './components/MealByName.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/categories', name: 'Categories', component: Categories },
  { path: '/categories/:strName', name: 'CategoryItems', component: CategoryItems, props: true,},
  { path: '/findmeal', name: 'Findmeal', component: Findmeal },
  { path: '/findmeal/getmealbyid', name: 'GetMealById', component: GetMealById},
  { path: '/findmeal/mealbyid/:id', name: 'MealById', component: MealById, props: true,},
  { path: '/findmeal/getmealbyingredient', name: 'GetMealByIngredient', component: GetMealByIngredient},
  { path: '/findmeal/mealbyingredient/:ingredient', name: 'MealByIngredient', component: MealByIngredient, props: true,},
  { path: '/findmeal/random', name: 'RandomMeal', component: RandomMeal },
  { path: '/findmeal/getmealrandom', name: 'GetMealRandom', component: GetMealRandom },  
  { path: '/findmeal/getmealbyarea', name: 'GetMealByArea', component: GetMealByArea },
  { path: '/findmeal/mealbyarea/:area', name: 'MealByArea', component: MealByArea, props: true },
  { path: '/findmeal/getmealbyname', name: 'GetMealByName', component: GetMealByName },
  { path: '/findmeal/mealbyname/:name', name: 'MealByName', component: MealByName, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
