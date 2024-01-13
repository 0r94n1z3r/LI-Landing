import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue';
import PreviewPlaceholder from '@/pages/PreviewPlaceholder.vue';

import Docs from '@/pages/Docs.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/:catchAll(.*)',
    //   name: 'any',
    //   component: Home
    // },

    {
      path: '/profile/:id',
      name: 'profile',
      component: PreviewPlaceholder,
      props: true,
      meta: {redir: true}
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PreviewPlaceholder,
      props: true,
      meta: {redir: true}
    },

    {
      path: '/docs/:type',
      name: 'docs',
      component: Docs,
      props: true
    },
  ]
})

export default router
