<template>
    <div>
        <div class="banner" @click="handleShowGallary">
            <img :src="bannerImg" alt="" class="banner-img"/>
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe696;</span>
                    {{gallaryImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <detail-gallary 
                @close="close"
                :data="gallaryImgs"
                v-show="showGallary"
                ></detail-gallary>
        </fade-animation>
    </div>
</template>

<script>
import DetailGallary from '@/components/gallary'
import FadeAnimation from '@/components/fade'
export default {
    props:['bannerImg', 'gallaryImgs', 'sightName'],
    data(){
        return {
            showGallary: false
        }
    },
    methods:{
        handleShowGallary(){
            this.showGallary = true
        },
        close(){
            this.showGallary = false
        }
    },
    components:{
        DetailGallary,
        FadeAnimation
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    width 100%
    height 0
    overflow hidden
    padding-bottom 55%
    .banner-img 
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-number
            height .32rem
            line-height .32rem
            padding 0 .4rem
            border-radius .2rem
            background rgba(0,0,0,.8)
            font-size .24rem
            .banner-icon
                font-size .24rem
</style>
