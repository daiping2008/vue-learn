<template>
    <div>
        <v-header></v-header>
        <v-swiper :data="swiperList"></v-swiper>
        <home-icons :data="iconList"></home-icons>
        <home-recommend :data="recommendList"></home-recommend>
        <home-weekend :data="weekendList"></home-weekend>
    </div>
</template>

<script>
import VHeader from './components/head'
import VSwiper from './components/swiper'
import HomeIcons from './components/homeIcons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import {getIndex} from '@/api'
export default {
    name:'Home',
    data(){
        return {
            swiperList:[],
            recommendList:[],
            iconList:[],
            weekendList:[]
        }
    },
    async mounted(){
       let {data} = await getIndex()
       this.swiperList = data.swiperList
       this.recommendList = data.recommendList
       this.iconList = data.iconList
       this.weekendList = data.weekendList
    },
    components: {
        VHeader,
        VSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }
}
</script>

<style lang="stylus" >

</style>

