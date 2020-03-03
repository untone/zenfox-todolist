import store from '@/store/index'
import Users from '@/views/Users.vue'

export default [
  {
    path: '/',
    name: 'Users',
    component: Users,
    beforeEnter: (to, from, next) => {
      if (!store.getters['users/ready']) {
        store.dispatch('users/SET_PAGE', to.query.page)
      }
      next()
    },
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('@/views/User.vue'),
    props: true,
  },
]
