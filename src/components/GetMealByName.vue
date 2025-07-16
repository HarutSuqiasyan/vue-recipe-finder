<template>
  <h2>Get Meals By Name</h2>
  <div class="container">
    <p>Write the meal name (e.g., Chicken Handi, Arrabiata, etc.)</p>
    <input type="text" placeholder="Meal name" v-model="name" />
    <router-link :to="link">
      <button @click="ifBlank()">Get</button>
    </router-link>
  </div>
  <h3>{{ error }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      error: '',
      link: '/findmeal/mealbyname/' + this.name
    };
  },
  methods: {
    ifBlank() {
      if (this.name === '') {
        this.error = 'Meal name is not given';
        this.link = '/findmeal/getmealbyname';
      } else {
        this.error = '';
        this.link = '/findmeal/mealbyname/' + this.name;
      }
    }
  }
};
</script>

<style scoped>
@import url('../assets/GetMealByName.scss');
</style>
