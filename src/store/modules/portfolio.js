const state = {
    funds: 10000,
    stocks: [],
}
const getters = {
    stockPortfolio: (state, getters)=> {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => (element.id === stock.id))
            // console.log(record);
            return{
                id:stock.id,
                quantity:stock.quantity,
                name:record.name,
                price:record.price,
            }
        })
    },
    funds:state =>{
        return state.funds
    }
}
const mutations = {
    'BUY_STOCKS'(state, {stockId , stockPrice, quantity}) {
        const record = state.stocks.find(element => (element.id === stockId))
        // console.log(record);
        if (record) {
            record.quantity += Number(quantity)
        } else {
            state.stocks.push({
                id: stockId,
                quantity: Number(quantity)
            })
            console.log(state.stocks)
        }
        state.funds -= stockPrice * Number(quantity);

    },
    'SEL_STOCK'(state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(element => (element.id === stockId))
        // console.log(record);
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity;
    }
}
const actions = {
    selStock: ({commit}, order) => {
        commit('SEL_STOCK', order)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}