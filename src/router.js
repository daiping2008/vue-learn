import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home'
import City from '@/pages/city'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/city',
        name:'City',
        component:City
    }
]

export default new VueRouter({
    routes
})