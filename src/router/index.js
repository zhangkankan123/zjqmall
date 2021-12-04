import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const home=()=>import('../views/home/home')
const me=()=>import('../views/me/me')
const shopping=()=>import('../views/shopping/shopping')
const detail=()=>import('../views/detail/Detail')
const routes=[
  {
    path: '',
    redirect:'/home'
  },

  {
    path:'/home',
    meta:{
      title:'首页'
    },
    component:home
  },
  {
    path:'/me',
    meta:{
      title:'关于我'
    },
    component:me
  },
  {
    path:'/shopping',
    meta:{
      title:'购物车'
    },
    component:shopping
  },
  {
    path:'/detail',
    component:detail,
    meta: {
      title: "商品详情"
    }
  }
]
 const router=new VueRouter({
  routes,
  mode:'history',

})

export default  router



