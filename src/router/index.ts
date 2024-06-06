import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../login/index.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/layout/index.vue'),
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          meta: {
            // title: '首页'
          }
        },
        //系统管理
        {
          path: '/system',
          name: 'system',
          meta: {
            title: '系统管理'
          },
          children: [
            {
              path: '/user',
              name: 'systemUser',
              component: () => import('@/views/system/user/index.vue'),
              meta: {
                title: '用户管理'
              }
            },
            {
              path: '/role',
              name: 'systemRole',
              component: () => import('@/views/system/role/index.vue'),
              meta: {
                title: '角色管理'
              }
            },
            {
              path: '/menu',
              name: 'systemMenu',
              component: () => import('@/views/system/menu/index.vue'),
              meta: {
                title: '菜单管理'
              }
            }
          ]
        },
        //系统监控
        {
          path: '/monitor',
          name: 'monitor',
          meta: {
            title: '系统监控'
          },
          children: [
            {
              path: '/online',
              name: 'monitorOnline',
              component: () => import('@/views/monitor/online/index.vue'),
              meta: {
                title: '在线用户'
              }
            },
            {
              path: '/logs',
              name: 'monitorLogs',
              component: () => import('@/views/monitor/logs/index.vue'),
              meta: {
                title: '操作日志'
              }
            },
            {
              path: '/errorLog',
              name: 'monitorErrorLog',
              component: () => import('@/views/monitor/errorLog/index.vue'),
              meta: {
                title: '异常日志'
              }
            }
          ]
        }
      ]
    }
  ]
})

export default router
