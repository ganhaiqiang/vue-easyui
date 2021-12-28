import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataGrid from '@/components/DataGrid'
import Layout from '@/components/Layout'
import Tabs from '@/components/Tabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/DataGrid',
      name: 'DataGrid',
      component: DataGrid
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Tabs',
      name: 'Tabs',
      component: Tabs
    }
  ]
})
