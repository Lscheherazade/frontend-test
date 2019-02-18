<template>
    <button class="menu" @click="changeSection">
        <font-awesome-icon class="clearfix" :icon="iconLeft" v-if="iconLeft != undefined" />
        <span>{{ text }}</span>
        <font-awesome-icon :icon="iconRight" v-if="iconRight != undefined" />
    </button>
</template>

<script>
export default {
    props: [
        'text',
        'iconLeft',
        'iconRight'
    ],
    computed: {
      homeSection: {
          get() {
              return this.$store.state.homeSection
          },
          set(selectedSection) {
              this.$store.commit('setHomeSection',selectedSection);
          }
      },
    },
    methods: {
        changeSection() {
            if(this.homeSection == 'all')
                this.homeSection = 'executive'
            else if(this.homeSection == 'executive')
                this.homeSection = 'staff'
            else if(this.homeSection == 'staff')
                this.homeSection = 'oprational'
            else if(this.homeSection == 'oprational')
                this.homeSection = 'it'
            else if(this.homeSection == 'it')
                this.homeSection = 'all'
            
        }
    }
}
</script>

<style lang="stylus">
    @import '../../../assets/css/color.styl'

    button.menu
        border none
        background $white
        outline none !important
        margin-right 0

</style>
