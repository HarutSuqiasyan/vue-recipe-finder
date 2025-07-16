<template>
    <p class="findmeal_title">Options to find a meal</p>
    <div class="options_section">
        <div class="options">
            <router-link to="/findmeal/getmealbyingredient">
                <p>1.Get meals with the main ingredient</p>
            </router-link>
            <router-link to="/findmeal/getmealrandom">
                <p>2.Get a random meal</p>
            </router-link>
            <router-link to="/findmeal/getmealbyarea">
                <p>3.Get meals by location</p>
            </router-link>
            <router-link to="/findmeal/getmealbyid">
                <p>4.Get meal by ID</p>
            </router-link>
            <router-link to="/findmeal/getmealbyname">
                <p>5. Get meal by name</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default{
    
}
</script>

<style scoped>
@import '@/assets/Findmeal.scss';
</style>