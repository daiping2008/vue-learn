<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area" v-show="city">
                <div class="title">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="button-list">
                    <div 
                        v-for="item in hotCities" 
                        :key="item.id" 
                        @click="handleChangeCity(item.name)"
                        class="button-wrapper">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div
                v-for="(item,key) in cities"
                :key="key"
                :ref="key"
                class="area">
                <div  class="title">{{key}}</div>
                <div class="item-list">
                    <div
                        v-for="city in item"
                        :key="city.id"
                        @click="handleChangeCity(city.name)"
                        class="item">
                        {{city.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:['city', 'cities', 'hotCities', 'letter'],
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    methods:{
        handleChangeCity(city){
            this.$emit('changeCity', city)
        }
    },
    watch:{
        letter(){
            if (this.letter) {
                const el = this.$refs[this.letter][0]
                this.scroll.scrollToElement(el,200)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.list
    position absolute
    left 0
    top 1.58rem
    bottom 0
    right 0
    z-index 10
    overflow hidden
.area
    .title
        line-height .44rem
        background #eee
        padding-left .2rem
        color #666666
        font-size .26rem
    .button-list
        overflow hidden
        display flex
        flex-wrap wrap
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
            flex 0 0 33.333333333%
            width 33.333333333%
            .button
                margin .1rem
                padding .1rem 0
                text-align center
                border .02rem solid #cccccc
                border-radius .06rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
</style>

