<template>
    <div class="category" v-for="(el) in categoriesJSON.categories">
        <router-link :to="'/categories/' + el.strCategory">
            <div class="category_section_1">
                <p class="index">{{ el.idCategory }}</p>
                <img class="category_img" :src="el.strCategoryThumb">
            </div>
            <div class="category_section_2">
                <p class="title">{{ el.strCategory }}</p>
                <p>{{ el.strCategoryDescription }}</p>
            </div>
        </router-link>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return {
            categoriesJSON: {},
        }
    },
    methods: {
        getCategoriesJSON(){
            axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then((res) => this.categoriesJSON = res.data)
        },
    }, 
    mounted(){
        this.getCategoriesJSON()
    }
}

</script>

<style>
@import '@/assets/Categories.scss';
</style>