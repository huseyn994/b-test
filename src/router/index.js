import Vue from 'vue'
import Router from 'vue-router'
import Cashier from '../components/Cash/Cashier.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Cashier',
            component: Cashier
        },
        {
            path: '/:entry',
            name: 'Cashier',
            component: Cashier
        }
    ]
})