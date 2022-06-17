<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1>
          Pick your next vacation
        </h1>
        <h2>
          Add a new country
        </h2>
        <input type="text" v-model="newCountry"/> <button class="btn btn-dark" @click="addCountry()">toevoegen</button>
        <h3>
          {{newCountry}}
        </h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="(country, index) in newCountries" :key="index">
            {{country}}
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item" v-for="(country,index) in countryData.countries" v-bind:key="country.id" :title="country.details"
              @click="selectCountry(index)">
            {{country.name}}
          </li>
        </ul>
        <p> Teller= {{counter}}</p>
        <button v-on:click="counter++" class="btn btn-success">+</button>
        <button v-on:click="counter--" class="btn btn-danger">-</button>

        <p> Teller 2= {{count}}</p>
        <button @click="increment()" class="btn btn-success">+</button>
        <button @click="decrement()" class="btn btn-danger">-</button>
      </div>
      <div class="col-6">
        <CountryDetail v-if="selectedCountry" :country="selectedCountry"/>
      </div>
    </div>
  </div>
</template>

<script>
import countryData from '../data/countryData'
import CountryDetail from "@/components/CountryDetail";
export default {
  name: "vacationPicker",
  components: {CountryDetail},
  data(){
    return {
      countryData,
      counter:0,
      count:0,
      selectedCountryIndex: 0,
      newCountry:"",
      newCountries:[]
    }
  },
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
      selectedCountry(){
        console.log("country aangeroepen");
        return{
          id: this.countryData.countries[this.selectedCountryIndex].id,
          name: this.countryData.countries[this.selectedCountryIndex].name,
          capital: this.countryData.countries[this.selectedCountryIndex].capital,
          cost: this.countryData.countries[this.selectedCountryIndex].cost,
          details: this.countryData.countries[this.selectedCountryIndex].details,
          img: this.countryData.countries[this.selectedCountryIndex].img,

        }
      },

    }
  }

</script>

<style scoped>

</style>