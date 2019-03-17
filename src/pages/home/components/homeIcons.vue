<template>
    <div class="icons-wrapper" v-if="showList">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div v-for="item in page" :key="item.id" class="icons-item">
                    <div class="icon-img">
                        <img :src="item.imgUrl" :alt="item.desc"/>
                    </div>
                    <div class="icon-desc">{{item.desc}}</div>    
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    props:['data'],
    data(){
        return {
            swiperOptions: {
                loop: true
            }
        }
    },
    computed:{
        showList(){
            return this.data.length
        },
        pages(){
            let pages = []
            this.data.forEach((item, index) => {
                const page = Math.floor(index/8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons-wrapper
    height 0
    padding-bottom 50%
    .icons-item
        position relative
        width 25%
        height 0
        padding-bottom 25%
        float left
        .icon-img
            position absolute
            top 0
            left 0 
            right 0 
            bottom .44rem
            box-sizing border-box
            padding .1rem
            img 
                height 100%
                margin 0 auto
                display block
        .icon-desc
            position absolute
            left 0 
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            text-align center
            color $darkTextColor
            ellipsis()
</style>
