<template>
    <header>
        <div class="logo">
            <a href="/"><img src="../assets/images/logo.png" alt=""></a>
        </div>
        <Navbar />
    </header>
</template>

<script >
import Navbar from './Navbar.vue';
export default{
    components: {Navbar}
}
</script>

<style scoped>
@import '@/assets/Header.scss';
</style>
