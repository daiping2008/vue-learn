<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list
            :city="city"
            :cities="cities"
            :hotCities="hotCities"
            :letter="letter"
            @change="change"
            @changeCity="changeCity"
        ></city-list>
        <city-alphabet @change="change" :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
import {mapState, mapActions} from 'vuex'

import {getCity} from '@/api/index'
export default {
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    async mounted(){
        let {data} = await getCity()
        this.cities = data.cities
        this.hotCities = data.hotCities
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        change(letter) {
            this.letter = letter
        },
        changeCity(city) {
            this.changeCityAction(city)
            this.$router.push('/')
        },
        ...mapActions(['changeCityAction'])
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    }
}
</script>

<style>

</style>
