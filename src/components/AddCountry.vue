<template>
  <h2 class="mt-4">
    Add a new country
  </h2>
  <input type="text" v-model="newCountry"/> <button class="btn btn-dark" @click="addCountry()">Add a Country</button>
  <h3>
    {{newCountry}}
  </h3>
  <ul class="list-group">
    <li class="list-group-item" v-for="(country, index) in newCountries" :key="index">
      {{country}}
    </li>
  </ul>
</template>

<script>

import index from "@/router";

export default {
  name: "AddCountry",
  data(){
    return {
      index,
      newCountry:"",
      newCountries:[]
    }
  },
  methods: {
    addCountry(){
      this.newCountries.push(this.newCountry);
      this.newCountry = "";
    },
  }
}

</script>

<style scoped>

</style>