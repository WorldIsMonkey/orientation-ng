<template>
  <div class="home">
    <!-- able to change the background -->
    <!-- different question type goes here -->
      该插题了胖友们
      <div class="columns">

        <div class="column is-1">
          <router-link to="/insert/multipleChoice">
            <a class="button"> 选择题 </a>
          </router-link>

          <router-link to="/insert/mask">
            <a class="button"> 挡脸题 </a>
          </router-link>

          <router-link to="/insert/mosaic">
            <a class="button"> 马赛克题 </a>
          </router-link>
        </div>
        
        <div class="column is-1">
          <router-link to="/insert/music">
            <a class="button"> 音乐题 </a>
          </router-link>

          <router-link to="/insert/shortAnswer">
            <a class="button"> 简答题 </a>
          </router-link>

          <router-link to="/insert/trueFalse">
            <a class="button"> 判断题 </a>
          </router-link>
        </div>

      </div>

  </div>
</template>

<style lang="css" scoped>
@import "../../styles/Home.css";
</style>

<script>
export default {
  name: 'insertHome',
}
</script>
