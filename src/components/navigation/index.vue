<template>
    <nav>
        <div class="row">
            <div class="col-md-10">
                <menu-app text="Home" target="/" iconLeft="home" />
                <menu-app text="About" target="about" iconLeft="cat" />
                <menu-app text="Docs" target="docs" iconLeft="file-alt" />
            </div>
            <div class="col-md-2 text-right" v-if="$route.name == 'home'">
                <section-app text="Next" iconRight="chevron-right" />
            </div>
        </div>
    </nav>
</template>

<script>
import MenuApp from './child/menu'
import SectionApp from './child/section'
import { mapState } from 'vuex'

export default {
    props: [
        'title'
    ],
    components: {
        MenuApp,
        SectionApp
    },
    computed: {
        ...mapState([
        'homeSection',
        ]),
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="stylus">
    nav
        display block
        padding 10px
        position relative
        text-align left
</style>
