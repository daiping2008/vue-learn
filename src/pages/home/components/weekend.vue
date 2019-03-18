<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li v-for="item in data" :key="item.id" class="item ">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" :alt="item.desc"/>
                </div>
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';
.title
    line-height .8rem
    background-color #eee
    text-indent .2rem
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    img 
        width 100%
.item-info
    padding .1rem
    .item-titile
        line-height .54rem
        font-size .32rem
    .item-desc
        line-height .4rem
        color #cccccc
</style>
