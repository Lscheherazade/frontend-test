<template>
    <div class="executive">
        <div class="col-md-12 p-0">
            <img src="@/assets/img/about-header.png" class="header">
        </div>

        <div class="col-md-10 offset-md-1">
            <h2 class="blue-text">Staff</h2>
            <p>
                Staff are members who are not part of executive and operational, but play an important role in supporting organizations, such as Finance and HR.
            </p>

            
            <div class="row">
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/staff/ivan.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/staff/juna.jpg" class="rounded-circle">
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
