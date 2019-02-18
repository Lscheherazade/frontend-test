<template>
    <div class="box p-0 white">
        <header-panel :title="title" />
        <body-panel>
            <slot />
        </body-panel>
    </div>
</template>

<script>
import HeaderPanel from './child/header'
import BodyPanel from './child/body'

export default {
    props: [
        'title',
        'content'
    ],
    components: {
        HeaderPanel,
        BodyPanel,
    }
}
</script>

<style lang="stylus">
    @import '../../assets/css/color.styl'

    .box
        box-shadow 0 2px 8px 0 rgba(0,0,0,0.15)
        border none
        border-radius 5px
        position relative
        margin-bottom 20px
        width 100%
</style>
