<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <h3 class="mt-4">
          Pick your next vacation:
        </h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="(country,index) in countryData.countries" v-bind:key="country.id" :title="country.details"
              @click="selectCountry(index)">
            {{country.name}} {{country.rating}}
          </li>
        </ul>
      </div>
      <div class="col-md-6 col-sm-12">
        <CountryDetail @rating="onRating($event)" v-if="selectedCountry" :country="selectedCountry"/>
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
      selectedCountryIndex: 0,
      newCountry:"",
      newCountries:[]
    }
  },
  methods: {
    onRating(rating){
      this.countryData.countries[this.selectedCountryIndex].rating += rating;
    },
    addCountry(){
      this.newCountries.push(this.newCountry);
      this.newCountry = "";
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
  emits: ['rating'],
    computed:{
      selectedCountry(){
        console.log("country Picked");
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