<template>
    <div class="meal" v-for="el in randomJSON">
        <div class="img_section">
            <img :src="el.strMealThumb" alt="">
        </div>
        <div class="decription_section">
            <p class="title">{{ el.strMeal }}</p>
            <p>Category: {{ el.strCategory }}</p>
            <p class="id">ID: {{ el.idMeal }}</p>
            <p class="ing_title">Ingredients</p>
            <div class="ingredients">
                <div v-for="i in 20" :key="i">
                    <p>{{ el['strIngredient' + i] }}</p>
                </div>
            </div>
            <p class="instructions"><b>Cooking instructions:</b> {{ el.strInstructions }}</p>
            <a :href="el.strYoutube">🎥 {{ el.strYoutube }}</a>
            <p class="area">🗺️ {{ el.strArea }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            randomJSON: {}
        }
    },
    methods: {
        getRandomMeal() {
            axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
                .then((res) => this.randomJSON = res.data.meals)
        }
    },
    mounted() {
        this.getRandomMeal()
    }
}
</script>

<style scoped>
@import url('../assets/RandomMeal.scss');
</style>
