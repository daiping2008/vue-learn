<template>
    <div>
        <div class="recommend-title">热门推荐</div>
        <ul>
            <router-link 
                :to="'/detail/'+item.id" 
                tag="li" 
                v-for="item in data" 
                :key="item.id" 
                class="item">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" :alt="item.desc" class="item-img">
                </div>
                <div class="item-content-wrapper">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
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
.recommend-title
    margin-top .2rem
    line-height .8rem
    background-color #eeeeee
    text-indent .2rem
.item
    overflow hidden
    display flex
    height 1.9rem
    .item-img-wrapper
        flex 0 0 1.7rem
        width 1.7rem
        height 1.7rem
        padding .1rem
        img
            width 100%
    .item-content-wrapper
        flex 1
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #cccccc
            ellipsis()
        .item-button
            line-height .44rem
            margin-top .16rem
            background-color #ff9300
            padding 0 .2rem
            border-radius .06rem
            color #ffffff
</style>
