<template>
  <div v-for="el in nameJSON" :key="el.idMeal">
    <router-link :to="'/findmeal/mealbyid/' + el.idMeal">
      <div class="meal">
        <div class="img_section">
          <img :src="el.strMealThumb" alt="" />
        </div>
        <div class="decription_section">
          <p class="title">{{ el.strMeal }}</p>
          <p>Category: {{ el.strCategory }}</p>
          <p class="area">Area: {{ el.strArea }}</p>
          <p>ID: {{ el.idMeal }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      nameJSON: {}
    };
  },
  methods: {
    getNameJSON() {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.name}`)
        .then((res) => {
          this.nameJSON = res.data.meals;
        });
    }
  },
  mounted() {
    this.getNameJSON();
  }
};
</script>

<style scoped>
@import url('../assets/MealByName.scss');
</style>
