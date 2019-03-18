<template>
    <div class="list" ref="list">
        <div>
            <ul>
                <li
                    v-for="item in letters"
                    :key="item"
                    :ref="item"
                    @click="handleLetterClick(item)"
                    @touchstart.prevent='handleTouchStart'
                    @touchmove="handleTouchMove"
                    @touchend="handleTouchEnd"
                    class="item">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['cities'],
    data(){
        return {
            timer:null,
            touchStatus:false,
            startY:-1
        }
    },
    methods:{
        handleLetterClick(letter) {
            this.$emit('change', letter)
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        handleTouchMove(e){
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    const touchY = e.touches[0].clientY-79
                    const index = Math.floor((touchY-this.startY) / 20)
                    if (index>=0&&index<this.letters.length){
                        this.$emit('change', this.letters[index])
                    }
                }, 20)
            }
        },
        handleTouchEnd(){
            this.touchStatus = false
        }
    },
    computed:{
        letters(){
            let letters = []
            for (let value in this.cities) {
                letters.push(value)
            }
            return letters
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list
    display flex
    position absolute
    flex-direction column
    justify-content center
    text-align center
    right 0
    top 1.59rem
    bottom 0
    width .4rem
    z-index 100
    .item
        line-height .4rem
        text-align center
        color $bgColor
</style>
