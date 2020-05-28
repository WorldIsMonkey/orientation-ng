<template>
  <div class="home">
    <!-- able to change the background -->
    <!-- different question type goes here -->

      <div class="columns">

        <div class="column is-1">
          <router-link to="/multipleChoice">
            <a class="button"> 选择题 </a>
          </router-link>

          <router-link to="/mask">
            <a class="button"> 挡脸题 </a>
          </router-link>

          <router-link to="/mosaic">
            <a class="button"> 马赛克题 </a>
          </router-link>
        </div>
        
        <div class="column is-1">
          <router-link to="/music">
            <a class="button"> 音乐题 </a>
          </router-link>

          <router-link to="/shortAnswer">
            <a class="button"> 简答题 </a>
          </router-link>

          <router-link to="/trueFalse">
            <a class="button"> 判断题 </a>
          </router-link>
        </div>

      </div>

  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
