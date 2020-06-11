<template>
    <b-col cols="4" class="mb-1">
        <b-card
                :title="stock.name"
                :sub-title="'Price: '+ stock.price +'$  (Number: ' + stock.quantity+')'"
                border-variant="primary"
        >
            <b-form-input
                    class="mb-1"
                    type="number"
                    v-model="quantity"
                    :class="{danger: checkOrderQuantity}"
            ></b-form-input>
            <b-button size="sm"
                      :variant="checkOrderQuantity ? 'dark' : 'primary'"
                      :disabled="checkOrderQuantity || quantity <=0"
                      @click="sellStock"
            >{{checkOrderQuantity ? 'More Than Number' : 'Delete'}}
            </b-button>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        name: "Stock",
        props: ['stock',],
        computed: {
            checkOrderQuantity() {
                return this.quantity > this.stock.quantity
            }
        },
        data() {
            return {
                quantity: 0,
            }
        },

        methods: {
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                }
                this.$store.dispatch('selStock', order)
                this.quantity = 0;
            }
        },
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>