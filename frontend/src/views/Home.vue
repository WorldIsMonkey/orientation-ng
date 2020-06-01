<template>
  <div class="home">
    <!-- able to change the background -->
    <!-- different question type goes here -->

      <div class="columns">

        <div class="column is-1">
          <router-link to="/insert/home">
            <a class="button"> 插题 </a>
          </router-link>

        </div>
        
        <div class="column is-1">
          <router-link to="/present/home">
            <a class="button"> 开搞 </a>
          </router-link>
        </div>

      </div>

  </div>
</template>

<style lang="css" scoped>
@import "../styles/Home.css";
</style>

<script>
export default {
  name: 'home',
}
</script>
