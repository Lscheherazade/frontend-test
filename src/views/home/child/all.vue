<template>
    <div class="all">
        <img src="@/assets/img/members/all.jpg" alt="">

        <div
            class="member popup"
            :key="member.name"
            v-for="member in members"
            :style="{top: member.top+'px', left: member.left+'px'}"
        >
            <div class="text">
                {{ member.name }} <br/>
                {{ member.position }}
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
