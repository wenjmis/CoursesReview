var port = process.env.PORT || 8080;

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Details from '../views/Details.vue'
import Account from '../views/Account.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true,
      title: 'CCUplus',
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    meta: {
      auth: true,
      title: 'CCUplus',
    }
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    meta: {
      auth: true,
      title: 'CCUplus',
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {
      auth: true,
      title: 'CCUplus',
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
