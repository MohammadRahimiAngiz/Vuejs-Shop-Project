<template>
    <b-row>
        <app-stock :key="stock.id" v-for="stock in stocks" :stock="stock"></app-stock>
    </b-row>
</template>

<script>
    import stock from './Stock'

    export default {
        name: "Stocks",
        components: {
            appStock: stock,
        },
        // data(){
        //     return{
        //         stocks:[
        //             {id:1,name:'BMW',price:'100$'},
        //             {id:2,name:'Mercedes',price:'200$'},
        //             {id:3,name:'KIA',price:'300$'},
        //             {id:4,name:'FIAT',price:'400$'}
        //         ]
        //     }
        // }
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        },
        created() {
            this.$store.dispatch('initStocks')
        }
    }
</script>

<style scoped>

</style>