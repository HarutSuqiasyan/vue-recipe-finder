<template>
  <div v-for="el in areaJSON" :key="el.idMeal">
    <router-link :to="'/findmeal/mealbyid/' + el.idMeal">
      <div class="meal">
        <div class="img_section">
          <img :src="el.strMealThumb" alt="">
        </div>
        <div class="decription_section">
          <p class="title">{{ el.strMeal }}</p>
          <p>Category: {{ el.strCategory }}</p>
          <p class="area">Area: {{ area }}</p>
          <p>ID: {{ el.idMeal }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    area: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      areaJSON: {}
    }
  },
  methods: {
    getAreaJSON() {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.area}`)
        .then((res) => this.areaJSON = res.data.meals)
    }
  },
  mounted() {
    this.getAreaJSON()
  }
}
</script>

<style scoped>
@import url('../assets/MealByArea.scss');
</style>
