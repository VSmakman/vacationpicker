<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="This is my first vue project"/>-->
<!--  <CustomerList idk="nieuwe tekst" />-->
  <vacationPicker />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CustomerList from "@/components/CustomerList";
import vacationPicker from "@/components/vacationPicker";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // CustomerList,
    vacationPicker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
