<template>
    <div>
        <v-header></v-header>
        <v-swiper :data="swiperList"></v-swiper>
    </div>
</template>

<script>
import VHeader from './components/head'
import VSwiper from './components/swiper'
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
        VSwiper
    }
}
</script>

<style lang="stylus" >

</style>

