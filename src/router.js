import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'	// 页面布局


Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',name: 'layout',component: layout,
      children: [
        {path: '/feature',component: () => import('@/views/featureLayer'),name: 'feature'},
        {path: '/poi',component: () => import('@/views/poilayer'),name: 'poilayer'},
        {path: '/home',component: () => import('@/views/home'),name: 'home'},
        {path: '/arcgismap',component: () => import('@/views/mapShow'),name: 'mapShow'},
        {path: '/querymap',component: () => import('@/views/queryMap'),name: 'queryMap'},
        {path: '/queryPolygon',component: () => import('@/views/queryPolygon'),name: 'queryPolygon'},
        {path: '/analyse',component: () => import('@/views/analyse'),name: 'analyse'},
      ]
    },





  ]
})


export default router;
