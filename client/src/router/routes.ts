import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue'),
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('@/views/article/article.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/views/message/message.vue'),
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('@/views/notice/notice.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/detail/detail.vue'),
    props: true,
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test.vue'),
  }
]
export default routes;