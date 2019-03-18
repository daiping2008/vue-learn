import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home'
import City from '@/pages/city'
import Detail from '@/pages/detail'

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
    },
    {
        path:'/detail/:id',
        name:'Detail',
        component:Detail
    }
]

export default new VueRouter({
    routes
})