import { createRouter, createWebHistory } from 'vue-router'
import Routes from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('./views/HomeView.vue'),
        },
        ...Routes,
        {
          path: '/:pathMatch(.*)*',
          name: '404',
          component: () => import('./views/HomeView.vue'),
        },
      ],
    },
  ],
})
