<template>
    <b-col cols="4" class="mb-1">
        <b-card
                :title="stock.name"
                :sub-title="'Price: '+stock.price + ' $'"
                border-variant="danger"
        >
            <b-form-input class="mb-1"
                          type="number"
                          v-model="quantity"
                          :class="{danger:checkOrderPrice}"
            ></b-form-input>
            <b-button size="sm"
                      :variant="checkOrderPrice ? 'dark' : 'danger' "
                      :disabled="checkOrderPrice || quantity <0"
                      @click="buyStock"
            >{{checkOrderPrice ? 'More Than Cash' : 'Buy'}}
            </b-button>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        name: "Stock",
        props: ['stock',],
        data() {
            return {
                quantity: 0,
            }
        },
        computed:{
            funds(){
                return this.$store.getters.funds
            },
            checkOrderPrice(){
                return this.stock.price * this.quantity > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                }
                // console.log(order);
                this.$store.dispatch('buyStock',order)
                this.quantity = 0;
            }
        },
    }
</script>

<style scoped>
.danger{
    border: 1px solid red;
}
</style>