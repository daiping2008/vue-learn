<template>
    <div>
        <home-header></home-header>
        <home-swiper :data="swiperList"></home-swiper>
        <home-icons :data="iconList"></home-icons>
        <home-recommend :data="recommendList"></home-recommend>
        <home-weekend :data="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
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
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }
}
</script>

<style lang="stylus" >

</style>

