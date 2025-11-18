import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomeView.vue'),
    // children: [{ path: '/about', name: 'about', component: () => import('./AboutView.vue') }],
  },

  { path: '/about', name: 'about', component: () => import('./views/AboutView.vue') },
  // { path: '*', component: HomeView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
