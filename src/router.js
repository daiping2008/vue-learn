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
        name:'city',
        component:City
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:Detail
    }
]

export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})