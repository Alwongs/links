import { createRouter, createWebHistory } from 'vue-router'
import Store from '../store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/links-page/:id',
        name: 'links-page',
        component: () => import('@/views/LinksPage.vue')
    },
    {
        path: '/profile-page',
        name: 'profile-page',
        component: () => import('@/views/ProfilePage.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterPage.vue'),
      },       
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/NotFoundPage.vue'),
      },       
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFoundPage.vue'),
      },  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0


    Store.dispatch('initAuth')
    .then(user => {
        if(to.matched.some(route => route.meta.authRequired)) {
            if(user) {
                next();
            } else {
                next('/login');
            }
        } else {
            next();
        }
    })
})

export default router
