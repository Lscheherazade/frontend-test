<template>
    <div class="executive">
        <div class="col-md-12 p-0">
            <img src="@/assets/img/about-header.png" class="header">
        </div>

        <div class="col-md-10 offset-md-1">
            <h2 class="blue-text">Executive</h2>
            <p>
                A executive team is a team responsible for running an organization, although the exact nature of the role varies depending on the organization. Executives run companies or government agencies. They create plans to help their organizations grow.
            </p>

            
            <div class="row">
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/executive/allana.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/executive/darwin.jpg" class="rounded-circle">
                </div>
                <div class="col-md-2 m-auto">
                    <img src="@/assets/img/members/executive/stenly.jpg" class="rounded-circle">
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
