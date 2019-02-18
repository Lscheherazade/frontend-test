<template>
    <div class="box-body p-0">
        <slot />
    </div>
</template>

<script>
export default {
    props: [
        'content'
    ]
}
</script>

<style lang="stylus">
    .box-body
        border-top-left-radius 0
        border-top-right-radius 0
        border-bottom-right-radius 3px
        border-bottom-left-radius 3px
</style>
