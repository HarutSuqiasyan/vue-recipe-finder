<template>
    <h2>Get Meal By ID</h2>
    <div class="container">
        <p>Write ID of meal that you want</p>
        <input min = 0 type="number" placeholder="ID" v-model="id">
        <router-link :to="'/findmeal/mealbyid/' + id">
            <button @click="">Get</button>
        </router-link>
    </div>
</template>

<script>
export default{
    data() {
        return {
            id: ''
        }
    },
    methods: {

    }
}

</script>
<style scoped>
@import url(../assets/GetMealById.scss);
</style>