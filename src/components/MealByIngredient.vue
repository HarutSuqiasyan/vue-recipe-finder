<template>
    <div class="meal" v-for="el in ingredientJSON">
        <div class="img_section">
            <img :src="el.strMealThumb" alt="">
        </div>
        <div class="decription_section">
            <p class="title">{{ el.strMeal }}</p>
            <p>Category: {{ el.strCategory }}</p>
            <p class="ingredient">Ingredient: {{ ingredient }}</p>
            <p class="ing_title">Ingredients</p>
            <div class="ingredients">
                <div v-for="i in 20" :key="i">
                    <p>{{ el['strIngredient' + i] }}</p>
                </div>
            </div>
            <p class="instructions"><b>Cooking instructions:</b> {{ el.strInstructions }}</p>
            <a :href="el.strYoutube" target="_blank">🎥 {{ el.strYoutube }}</a>
            <p class="area">🗺️ {{ el.strArea }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        ingredient: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            ingredientJSON: {}
        }
    },
    methods: {
        getIngredientJSON() {
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.ingredient}`)
                .then((res) => this.ingredientJSON = res.data.meals)
        }
    },
    mounted() {
        this.getIngredientJSON()
    }
}
</script>

<style scoped>
@import url('../assets/MealByIngredient.scss');
</style>
