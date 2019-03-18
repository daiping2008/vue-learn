<template>
    <div class="header">
        <div class="header-left">
            <i class="iconfont back-icon">&#xe6bc;</i>
        </div>
        <div class="header-input"><i class="iconfont">&#xe819;</i>输入城市/景点/游玩主题</div>
         <router-link to="/city">
            <div class="header-right">
                城市<i class="iconfont arrow-icon">&#xe64a;</i>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    display flex
    height $headerHeight
    line-height $headerHeight
    background $bgColor
    color #ffffff
    .header-left
        width .64rem
        float left
        text-align center
        .back-icon
            font-size .4rem
            text-align center
    .header-right
        width 1.24rem
        float right
        padding 0 .1rem
        text-align center
        color #fff
        .arrow-icon
            margin-left 0.04rem
            font-size .24rem
    .header-input
        flex 1
        height .64rem
        line-height .64rem
        background-color #fff
        color #ccc
        margin-top .12rem
        margin-left .2rem
        padding-left .1rem
        border-radius .1rem
</style>
