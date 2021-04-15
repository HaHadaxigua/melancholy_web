import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: "/table",
                name: "basetable",
                meta: {
                    title: '表格'
                },
                component: () => import ("../views/BaseTable.vue")
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginRegister.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '/404',
        component: () => import('../views/404.vue')
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
