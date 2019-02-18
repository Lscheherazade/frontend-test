<template>
    <div class="executive">
        <div class="col-md-12 p-0">
            <img src="@/assets/img/about-header.png" class="header">
        </div>

        <div class="col-md-10 offset-md-1">
            <h2 class="blue-text">IT</h2>
            <p>
                Information Technology are the basic components of the modern economy and everyday life. Software engineers, developers and programmers are no longer exclusive to the technology companies. Developers are at work in practically all areas of the economy.
            </p>

            
            <div class="row">
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/andre.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/arif.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/calvyn.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/dennis.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/edo.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/edwin.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/hansen.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/ivan.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/levi.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/suhar.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/it/yogi.jpg" class="rounded-circle">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'members'
    ]
}
</script>

<style lang="stylus" scope>
    .all
        & img
            width 100%
        
        .member
            position absolute
            width 30px
            height 30px
            cursor pointer
            background transparent

            & .text
                display none
                position absolute
                background #fff
                padding 5px 7px
                border-radius 5px
                left -48px
                top -65px
                text-transform capitalize
                width 130px
            
            &:hover .text
                display block


</style>
