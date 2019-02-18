<template>
    <div class="executive">
        <div class="col-md-12 p-0">
            <img src="@/assets/img/about-header.png" class="header">
        </div>

        <div class="col-md-10 offset-md-1">
            <h2 class="blue-text">Oprational</h2>
            <p>
                Operational is a division that focuses on daily business activities, such as marketing, content, design, etc.
            </p>

            
            <div class="row">
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/allysa.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/ary.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/hanna.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/herry.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/lulu.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/marlina.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/pandu.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/risa.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/vira.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/oprational/yogi.jpg" class="rounded-circle">
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
