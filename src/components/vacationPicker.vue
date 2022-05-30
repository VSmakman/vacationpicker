<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1>
          Pick your next vacation
        </h1>
        <ul class="list-group">
          <li class="list-group-item" v-for="(country,index) in countryData.countries" v-bind:key="country.id" :title="country.details"
              @click="selectCountry(index)">
            {{country.name}}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h3>
          Geselecteerd:
        </h3>
        <ul class="list-group">
          <li class="list-group-item">
            {{selectedCountry.id}}
          </li>
          <li class="list-group-item">
            <img :src="getImgUrl(selectedCountry.img)" style="height:18rem" class="img-fluid">
          </li>
          <li class="list-group-item">
            {{selectedCountry.name}}
          </li>
          <li class="list-group-item">
            {{selectedCountry.capital}}
          </li>
          <li class="list-group-item">
            {{selectedCountry.cost}}
          </li>
          <li class="list-group-item">
            {{selectedCountry.details}}
          </li>

          <li v-if="isExpensive" class="list-group-item">
            <p class="bg-danger">DUUR!</p>
          </li>
        </ul>
        <p> Teller= {{counter}}</p>
        <button v-on:click="counter++" class="btn btn-success">+</button>
        <button v-on:click="counter--" class="btn btn-danger">-</button>

        <p> Teller 2= {{count}}</p>
        <button @click="increment()" class="btn btn-success">+</button>
        <button @click="decrement()" class="btn btn-danger">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import countryData from '../data/countryData'
export default {
  name: "vacationPicker",
  data(){
    return {
      countryData,
      counter:0,
      count:0,
      selectedCountryIndex:0
    }
  },
  methods: {
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
        console.log("country angeroepen");
        return{
          id: this.countryData.countries[this.selectedCountryIndex].id,
          name: this.countryData.countries[this.selectedCountryIndex].name,
          capital: this.countryData.countries[this.selectedCountryIndex].capital,
          cost: this.countryData.countries[this.selectedCountryIndex].cost,
          details: this.countryData.countries[this.selectedCountryIndex].details,
          img: this.countryData.countries[this.selectedCountryIndex].img,

        }
      },
      isExpensive(){
        return this.countryData.countries[this.selectedCountryIndex].cost > 1000
      }
    }
  }

</script>

<style scoped>

</style>