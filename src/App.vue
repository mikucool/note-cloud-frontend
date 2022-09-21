<template>
  <div id="app">
    <div class="container context">
      <router-view :key="this.$route.fullPath"></router-view>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
</style>
