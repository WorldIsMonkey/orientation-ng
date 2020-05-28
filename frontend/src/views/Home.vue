<template>
  <div class="home">
    <!-- able to change the background -->
    this is the home of this project

    <!-- different question type goes here -->
    <div class="info">
      this is the navigation page 
      <router-link to="/multipleChoice"> 选择题 </router-link>
      <router-link to="/mask"> 挡脸题 </router-link>
      <router-link to="/mosaic"> 马赛克题 </router-link>
      <router-link to="/music"> 音乐题 </router-link>
      <router-link to="/shortAnswer"> 简答题 </router-link>
      <router-link to="/trueFalse"> 判断题 </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
