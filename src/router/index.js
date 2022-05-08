import { createRouter, createWebHistory } from 'vue-router'
import Nopage from '@/views/NopageView.vue'
import Home from '@/views/HomeView.vue'
import Tool from '@/views/ToolView.vue'
import Post from '@/views/PostView.vue'
import Introduce from '@/views/IntroduceView.vue'
import PostList from '@/views/PostList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tool',
    name: 'Tool',
    component: Tool
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: Introduce
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/post/list',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'none',
    component: Nopage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
