<template>
  <h2>Get Meals By Area</h2>
  <div class="container">
    <p>Write the area (e.g., Italian, French, Japanese, etc.)</p>
    <input type="text" placeholder="Area" v-model="area">
    <router-link :to="link">
      <button @click="ifBlank()">Get</button>
    </router-link>
  </div>
  <h3>{{ error }}</h3>
</template>

<script>
export default {
  data() {
    return {
      area: '',
      error: '',
      link: '/findmeal/mealbyarea/' + this.area
    }
  },
  methods: {
    ifBlank() {
      if (this.area === '') {
        this.error = 'Area is not given'
        this.link = '/findmeal/getmealbyarea'
      } else {
        this.error = ''
        this.link = '/findmeal/mealbyarea/' + this.area
      }
    }
  }
}
</script>

<style scoped>
@import url('../assets/GetMealByArea.scss');
</style>
