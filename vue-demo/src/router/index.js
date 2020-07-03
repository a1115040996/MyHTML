import vue from 'vue'
import vuerouter from 'vue-router'
import home from '../views/Home.vue'

vue.use(vuerouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: home,
        children: [
            // async/await
            {
                path: '/traffic',
                name: 'trafficdemo',
                component: () => import('../views/question/traffic/traffic.vue')
            },
            // promise
            {
                path: '/flatPromise',
                name: 'flatPromisedemo',
                component: () => import('../views/question/flatPromise/flatPromise.vue')
            },
            // async await 解决callback 问题
            {
                path: '/flatAsyncAwait',
                name: 'flatAsyncAwait',
                component: () => import('../views/question/flatAsyncAwait/flatAsyncAwait.vue')
            },
            // 手写一个promise
            {
                path: '/writePromise',
                name: 'writePromise',
                component: () => import('../views/question/writePromise/writePromise.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackchunkname: "about" */ '../views/About.vue')
    },
    {
        path: '/workspace',
        name: 'workspace',
        component: () => import('../views/workspace/workspace.vue')
    }
]

const router = new vuerouter({
    mode: 'history',
    base: process.env.base_url,
    routes
})

export default router
