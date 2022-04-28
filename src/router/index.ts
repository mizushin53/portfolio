import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Posts from '../pages/Posts.vue'
import Dev from '../pages/Dev.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {path: '/',name: 'Home', component: Home},
      {path: '/about',name: 'About', component: About},
      {path: '/posts',name: 'Posts', component: Posts},
      {path: '/dev',name: 'Dev', component: Dev}
    ]
})

export default router