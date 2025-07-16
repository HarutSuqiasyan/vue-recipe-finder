<template>
    <h2>Get Random Meal</h2>
    <div class="container">
        <p>Click the button to get a random meal</p>
        <router-link to="/findmeal/random">
            <button>Get</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'GetMealRandom'
}
</script>

<style scoped>
@import url('../assets/GetMealRandom.scss');
</style>
