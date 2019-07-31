import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login';
import manage from '@/components/manage';
import home from '@/components/home';
import projectManage from '@/components/projectManage'

Vue.use(Router);

export default new Router({
    strict: process.env.NODE_ENV !== 'production',
    routes: [{
        path: '/',
        component: login
    },{
        path: '/manage',
        component: manage,
        children: [{
            path: '',
            name: 'home',
            component: home
        },{
            path: '/project/:id',
            name: 'project',
            component: projectManage
        }]
    }]
})
