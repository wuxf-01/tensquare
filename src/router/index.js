import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/account',
    component: Layout,
    redirect: '/account/table',
    name: '账号管理',
    meta: { title: '账号管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: '账号列表',
        component: () => import('@/views/account/index'),
        meta: { title: '账号列表', icon: 'table' }
      },
      {
        path: 'save',
        name: '新增账号',
        component: () => import('@/views/account/add'),
        meta: { title: '新增账号', icon: 'tree' }
      }
    ]
  },
  {
    path: '/commodity',
    component: Layout,
    redirect: '/commodity/table',
    name: '商品管理',
    meta: { title: '商品管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: '商品列表',
        component: () => import('@/views/commodity/index'),
        meta: { title: '商品列表', icon: 'table' }
      },
      {
        path: 'save',
        name: '新增商品',
        component: () => import('@/views/commodity/add'),
        meta: { title: '新增商品', icon: 'tree' }
      }
    ]
  },
  {
    path: '/buyerOrder',
    component: Layout,
    redirect: '/buyerOrder/table',
    name: '买家订单列表',
    meta: { title: '买家订单列表', icon: 'example' },
    children: [
      {
        path: 'table',
        name: '买家订单列表',
        component: () => import('@/views/buyerOrder/list'),
        meta: { title: '买家订单列表', icon: 'table' }
      }
    ]
  },
  {
    path: '/sellerOrder',
    component: Layout,
    redirect: '/sellerOrder/table',
    name: '卖家订单列表',
    meta: { title: '卖家订单列表', icon: 'example' },
    children: [
      {
        path: 'table',
        name: '卖家订单列表',
        component: () => import('@/views/sellerOrder/list'),
        meta: { title: '卖家订单列表', icon: 'table' }
      }
    ]
  },
  /*{
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '基本信息管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '城市管理', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '标签管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/gathering',
    component: Layout,
    name: 'gathering',
    meta: { title: '活动管理', icon: 'example' },
    children: [
      {
        path: 'gathering',
        name: 'gathering',
        component: () => import('@/views/table/gathering'),
        meta: { title: '活动管理', icon: 'form' }
      }
    ]
  },
  {
    path: '/recruit',
    component: Layout,
    name: 'recruit',
    meta: { title: '招聘管理', icon: 'example' },
    children: [
      {
        path: 'enterprise', 
        name: 'enterprise', 
        component: () => import('@/views/table/enterprise'), 
        meta: { title: '企业管理', icon: 'table'}
      },
      {
        path: 'recruit',
        name: 'recruit',
        component: () => import('@/views/table/recruit'),
        meta: { title: '招聘管理', icon: 'table' }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    name: 'article',
    meta: { title: '文章管理', icon: 'example' },
    children: [
      {
        path: 'channel',
        name: 'channel',
        component: () => import('@/views/table/channel'),
        meta: { title: '频道管理', icon: 'table' }
      },
      {
        path: 'column',
        name: 'column',
        component: () => import('@/views/table/column'),
        meta: { title: '专栏管理', icon: 'table' }
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('@/views/table/article'),
        meta: { title: '文章管理', icon: 'table' }
      }
    ]
  },*/

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

