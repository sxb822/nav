import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home'
import Detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
  ],
  mode: "history",
})
