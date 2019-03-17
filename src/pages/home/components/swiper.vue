<template>
    <div class="wrapper" v-if="showList">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in data" :key="item.id">
                <img :src="item.imgUrl" alt="item.id" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
    
</template>

<script>
export default {
    props:['data'],
    data(){
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    computed:{
        showList(){
            return this.data.length
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background-color #ffffff
.wrapper
    width 100%
    height 0
    padding-bottom 35%
    img 
        width 100%
</style>
