<template>
    <h2>{{ strName }}</h2>

    <div v-for="meal in categoriesJSON.meals">
      <router-link :to="'/findmeal/mealbyid/' + meal.idMeal">
        <div class="meal">
          <div class="img_section">
              <img class="meal_img" :src=meal.strMealThumb>
          </div>
          <div class="title_id_section">
              <p>{{ meal.strMeal }}</p>
              <p>ID: {{ meal.idMeal }}</p>
          </div>
        </div>
      </router-link>
    </div>

</template>

<script>
import axios from 'axios'

export default {
  props: {
    strName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      categoriesJSON: {},
    }
  },
  methods: {
    getCategoriesJSON() {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.strName}`)
        .then((res) => (this.categoriesJSON = res.data))
    },
  },
  mounted() {
    this.getCategoriesJSON()
  },
}
</script>
<style scoped>
@import '@/assets/CategoryItems.scss';
</style>