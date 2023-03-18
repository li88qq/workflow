import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw, Router} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/', component: () => import('@/views/index.vue')
    }
]

const router: Router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;