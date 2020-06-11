<template>
    <b-row>
        <Stock :key="stock.id" v-for="stock in stocks" :stock="stock">
        </Stock>
    </b-row>
</template>

<script>
    import Stock from "./Stock";
    // import {mapGetters} from 'vuex'

    export default {
        name: "portfolio",
        components: {
            Stock,
        },
        computed: {

                stocks() {
                    // console.log( this.$store.getters.stockPortfolio);
                    return this.$store.getters.stockPortfolio;
                }
        }
    }
</script>

<style scoped>

</style>