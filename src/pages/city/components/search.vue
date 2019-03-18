<template>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    data(){
        return {
            keyword: ''
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
        width 100%
        line-height .62rem
        text-align center
        color #666666
        border-radius .06rem
        box-sizing border-box
        
</style>

