<template>
    <b-row class="mt-2 mb-2">
        <b-col cols="12">
            <b-navbar toggleable="md" type="dark" variant="danger">
                <b-navbar-brand to="/" @click="randomKey=false">
                    <!--                <router-link to="/" type="dark">-->
                    <b-icon-bootstrap-fill></b-icon-bootstrap-fill>
                    <strong class="ml-2">CAR Shop</strong>
                    <!--                </router-link>-->
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/stocks" @click="randomKey=true">Buy</b-nav-item>
                        <b-nav-item to="/portfolio" @click="randomKey=true">Cart</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <!--                        <b-nav-form>-->
                        <!--                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
                        <!--                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
                        <!--                        </b-nav-form>-->
                        <b-nav-item right>
                            <a @click="random()"  v-if="randomKey">Random</a>
                        </b-nav-item>

                        <b-nav-item right>
                            Cash :  <strong>{{funds | currency}}</strong>
                        </b-nav-item>

                        <!--                        <b-nav-item-dropdown right>-->
                        <!--                             Using 'button-content' slot -->
                        <!--                            <template v-slot:button-content>-->
                        <!--                                <em>User</em>-->
                        <!--                            </template>-->
                        <!--                            <b-dropdown-item href="#">Profile</b-dropdown-item>-->
                        <!--                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
                        <!--                        </b-nav-item-dropdown>-->
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                randomKey: false,
            }
        },
        computed:{
            funds(){
                return this.$store.getters.funds;
                },

        },
        methods:{
          random(){
              return this.$store.dispatch('randomizeStocks');
          }
        },
    }
</script>

<style scoped>

</style>