<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list
            :cities="cities"
            :hotCities="hotCities"
            :letter="letter"
            @change="change"
        ></city-list>
        <city-alphabet @change="change" :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'

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
    methods:{
        change(letter) {
            this.letter = letter
        }
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
