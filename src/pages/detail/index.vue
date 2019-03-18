<template>
    <div>
        <detail-banner 
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
            :sightName="sightName">
        </detail-banner>
        <detail-header></detail-header>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import {getDetail} from '@/api'
export default {
    name:'Detail',
    data(){
        return {
            bannerImg:'',
            categoryList:[],
            gallaryImgs:[],
            sightName:''
        }
    },
    async mounted(){
        let {data} = await getDetail({
            id: this.$route.params.id
        })
        this.bannerImg = data.bannerImg
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
    },
    components:{
        DetailHeader,
        DetailBanner
    }
}
</script>

<style lang="stylus" scoped>

</style>

