<template>
  <h3>
    Geselecteerd:
  </h3>
  <ul class="list-group">
    <li class="list-group-item">
      {{country.id}}
    </li>
    <li class="list-group-item">
      <img :src="getImgUrl(country.img)" style="height: 22rem" class="img-fluid">
    </li>
    <li class="list-group-item">
      {{country.name}}
    </li>
    <li class="list-group-item">
      {{country.capital}}
    </li>
    <li class="list-group-item">
      {{country.cost}}
    </li>
    <li class="list-group-item">
      {{country.details}}
    </li>

    <li v-if="isExpensive" class="list-group-item">
      <p class="bg-danger">DUUR!</p>
    </li>
  </ul>
</template>

<script>
import mixins from "@/mixins/mixins";

export default {
  name: "CountryDetail",
  props: ['country'],
  mixins: [mixins],
  methods: {
    addCountry(){
      this.newCountries.push(this.newCountry);
      this.newCountry = "";
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    selectCountry(index) {
      console.warn('click');
      this.selectedCountryIndex = index;
      console.log(this.selectedCountryIndex);
    },
    getImgUrl(img){
      return require('../assets/countries/' + img)
    }
  },
  computed:{
    isExpensive(){
      return this.country.cost > 1000
    }
  }

}
</script>

<style scoped>

</style>