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
import {loadFromLocal} from '@/common/js/localStorage'
import {CURR_CITY} from '@/common/js/localStorageKey'
import {getIndex} from '@/api'
import {mapActions} from 'vuex'
export default {
    name:'Home',
    data(){
        return {
            suerId:1001,
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
        const city = loadFromLocal(this.suerId, CURR_CITY)
        if (city) {
            this.changeCityAction(city)
        }
    },
    methods:{
        ...mapActions(['changeCityAction'])
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

