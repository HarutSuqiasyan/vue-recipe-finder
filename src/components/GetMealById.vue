<template>
    <h2>Get Meal By ID</h2>
    <div class="container">
        <p>Write ID of meal that you want</p>
        <input min = 0 type="number" placeholder="ID" v-model="id">
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
            id: '',
            error: '',
            link: '/findmeal/mealbyid/' + this.id
        }
    },
    methods: {
        ifBlank(){
            if(this.id === ''){
                this.error = 'ID is not given'
                this.link = '/findmeal/getmealbyid'
            }else {
                this.error = '';
                this.link = '/findmeal/mealbyid/' + this.id
            }
        }
    }
}

</script>
<style scoped>
@import url(../assets/GetMealById.scss);
</style>