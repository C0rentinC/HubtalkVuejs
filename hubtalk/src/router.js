import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Todolist from '@/views/Todolist.vue'
import Profil from '@/views/Profil.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: Todolist
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }, 
    {
      path: '/test',
      name: 'test',
      component: Home
    }
  ]
})
