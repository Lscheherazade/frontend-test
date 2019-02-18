<template>
    <div class="box-header">
        <h3 class="box-title">{{ title }}</h3>
    </div>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>

<style lang="stylus">
    @import '../../../assets/css/color.styl'

    .box-header
        display block
        padding 10px
        position relative
        text-align left

        & .box-title
            color $blue
            text-transform uppercase
            font-size 12px
            font-weight 700
            line-height 16px
</style>
