<template>
    <div class="meal" v-for="el in idJSON">
        <div class="img_section">
            <img :src="el.strMealThumb" alt="">
        </div>
        <div class="decription_section">
            <p class="title">{{ el.strMeal }}</p>
            <p>Category: {{ el.strCategory }}</p>
            <p class="id">ID: {{ id }}</p>
            <p class="ing_title">Ingredients</p>
            <div class="ingredients">
                <div  v-for="i in 20" :key="i">
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
export default{
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            idJSON: {}
        }
    },
    methods: {
        getIdJSON(){
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`)
                .then((res) => this.idJSON = res.data.meals)
        }
    },
    mounted() {
        this.getIdJSON()
    }
}
</script>

<style scoped>
@import url('../assets/MealById.scss');
</style>