<template>
   <div class="header">
      <router-link 
         tag="div"
         to="/"
         v-show="showAbs"
         class="header-abs">
         <div class="iconfont header-abs-back">&#xe6bc;</div>
      </router-link>
      <div 
         v-show="!showAbs"
         class="header-fixed"
         :style="opacityStyle">
         <router-link to="/">
            <div class="iconfont header-fixed-back">&#xe6bc;</div>
         </router-link>
         景点详情
      </div>
   </div> 
</template>

<script>
export default {
   data(){
      return {
         top:0,
         showAbs:true,
         opacityStyle:{
            opacity:1
         }
      }
   },
   methods:{
      handleScroll(){
         const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
         this.top = top
         if (top > 60) {
            let opacity = top/140
            opacity = opacity > 1 ? 1 : opacity
            this.opacityStyle = { opacity }
            this.showAbs = false
         } else {
            this.showAbs = true
         }
      }
   },
   mounted(){
      window.addEventListener('scroll', this.handleScroll)
   },
   unmounted(){
      window.addEventListener('scroll', this.handleScroll)
   }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.header-abs 
   position absolute
   left .2rem
   top .2rem
   width .8rem
   height .8rem
   line-height .8rem
   border-radius .4rem
   text-align center
   background-color rgba(0, 0, 0, .8)
   .header-abs-back
      color #ffffff
      font-size .4rem
.header-fixed
   position fixed
   top 0
   left 0
   right 0
   height $headerHeight
   line-height $headerHeight
   text-align center
   color #ffffff
   background-color $bgColor
   font-size .32rem
   .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
