<template>
  <nav>
    <router-link :class="$route.path === '/'?'active':'route'" to="/">Home</router-link>
    <router-link :class="$route.path === '/about'?'active':'route'" to="/about">About</router-link>
    <router-link :class="$route.path === '/categories'?'active':'route'" to="/categories">Categories</router-link>
    <router-link :class="$route.path === '/findmeal'?'active':'route'" to="/findmeal">Find Meal</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '@/assets/Navbar.scss';
</style>
