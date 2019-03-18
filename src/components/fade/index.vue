<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.v-enter
    opacity 0
.v-enter-active
    transition opacity 1s
.v-enter-to
    opacity 1
.v-leave
    opacity 1
.v-leave-active
    transition opacity 1s
.v-leave-to
    opacity 0
</style>

