<template>
    <h2>Get Meal By Ingredient</h2>
    <div class="container">
        <p>Write Ingredient of meal that you want</p>
        <input min = 0 type="text" placeholder="Ingredient" v-model="ingredient">
        <router-link :to="link">
            <button @click="ifBlank()">Get</button>
        </router-link>
    </div>
    <h3>{{ error }}</h3>
</template>

<script>
export default{
    data() {
        return {
            ingredient: '',
            error: '',
            link: '/findmeal/mealbyingredient/' + this.ingredient
        }
    },
    methods: {
        ifBlank(){
            if(this.id === ''){
                this.error = 'ID is not given'
                this.link = '/findmeal/getmealbyingredient'
            }else {
                this.error = '';
                this.link = '/findmeal/mealbyingredient/' + this.ingredient
            }
        }
    }
}

</script>
<style scoped>
@import url(../assets/GetMealByIngredient.scss);
</style>