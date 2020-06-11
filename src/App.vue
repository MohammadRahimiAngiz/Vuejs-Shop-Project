<template>
    <b-container>
        <app-header></app-header>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </b-container>
</template>

<script>
    import Header from "./components/Header";

    export default {
        name: 'App',
        components: {
            appHeader: Header
        },
        // created() {
        //     this.$store.dispatch('initStocks')
        // }
    }
</script>

<style>
    .slide-enter-active {
animation: slide-in 200ms ease forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease forwards
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
            opacity: 1;

        }
        to {
            transform: translateY(-30px);
            opacity: 0;

        }
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
