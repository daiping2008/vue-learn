<template>
    <div @click="close" class="container">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide 
                    v-for="(item, index) in data"
                    :key="index"
                >
                    <img :src="item" alt="" class="gallary-img" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
   
</template>

<script>
export default {
    props:['data'],
    data(){
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        }
    },
    methods:{
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow inherit

.container
    position fixed
    display flex 
    flex-direction column
    justify-content center
    top 0
    left 0 
    bottom 0
    right 0
    background #000
    z-index 1000
    .wrapper
        width 100%
        height 0
        padding-bottom 100%
        .gallary-img
            width 100%
        .swiper-pagination
            color #fff
            bottom -1rem
</style>

