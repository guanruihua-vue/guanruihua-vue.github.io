import { createRouter, createWebHistory } from 'vue-router'

import Routes from './routes'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./HomeView.vue'),
  },
  ...Routes,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('./HomeView.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
