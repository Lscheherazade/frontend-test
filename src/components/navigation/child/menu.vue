<template>
    <span class="menu">
        <router-link :to="target">
            <font-awesome-icon class="clearfix" :icon="iconLeft" v-if="iconLeft != undefined" />
            <span>{{ text }}</span>
            <font-awesome-icon :icon="iconRight" v-if="iconRight != undefined" />
        </router-link>
    </span>
</template>

<script>
export default {
    props: [
        'text',
        'target',
        'iconLeft',
        'iconRight'
    ]
}
</script>

<style lang="stylus">
    @import '../../../assets/css/color.styl'

    .menu, .menu a
        text-decoration none !important
        color $blue !important
        margin-right 8px

        svg
            vertical-align middle

        span
            vertical-align middle
            padding 0 8px
            text-transform uppercase
            font-size 12px
            font-weight 600

</style>
