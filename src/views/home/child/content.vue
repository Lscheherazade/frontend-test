<template>
    <div class="content">
        <all-member class="animated fadeIn" :members="members" v-if="homeSection == 'all'" />
        <executive-member class="animated fadeIn" v-if="homeSection == 'executive'" />
        <staff-member class="animated fadeIn" v-if="homeSection == 'staff'" />
        <oprational-member class="animated fadeIn" v-if="homeSection == 'oprational'" />
        <it-member class="animated fadeIn" v-if="homeSection == 'it'" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import AllMember from './all'
import ExecutiveMember from './executive'
import StaffMember from './staff'
import OprationalMember from './oprational'
import ItMember from './it'

export default {
    computed: {
        ...mapState([
            'homeSection',
        ]),
    },
    components: {
        AllMember,
        ExecutiveMember,
        StaffMember,
        OprationalMember,
        ItMember,
    },
    data() {
        return {
            members: [
                {
                    name: 'Levi Alexander',
                    position: 'frontend',
                    left: 455,
                    top: 60,
                }
            ]
        }
    },
    mounted() {
        axios
        .get('https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=1642911&units=metric')
        .then((response) => {
            console.log(response.data.main)
        })
    }
}
</script>

<style lang="stylus">
    .content
        position relative
</style>
