export default {
  path: 'demo',
  name: 'Demo',
  children: [
    {
      path: '/study-tailwindcss',
      name: 'Study Tailwindcss',
      component: () => import('./study-tailwindcss/index.vue'),
    },
  ],
}
