<template>

  <div class="container-fluid p-0">
    <main-navigation></main-navigation>
    <router-view />
  </div>

</template>

<script>
import MainNavigation from "@/components/MainNavigation";
export default {
  name: 'App',
  components: {MainNavigation}
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
