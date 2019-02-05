import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeComponent.vue'
import Todolist from '@/components/TodolistComponent.vue'
import Profil from '@/components/ProfilComponent.vue'

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
    }
  ]
})
