
//1. 导入vue-router
import VueRouter from 'vue-router'

//导入组件
import home from './component/tabbar/home.vue'
import member from './component/tabbar/member.vue'
import shoppingcart from './component/tabbar/shoppingcart.vue'
import search from './component/tabbar/search.vue'
import newslist from './component/news/newslist.vue'
import share from './component/news/share.vue'
import shop from './component/news/shop.vue'
import feedback from './component/news/feedback.vue'
import movie from './component/news/movie.vue'
import call from './component/news/call.vue'

//3. 创建路由对象
var router = new VueRouter({
	routes: [
		{path: "/", redirect: "/home"},
		{path: "/home", component: home},
		{path: "/member", component: member},
		{path: "/shoppingcart", component: shoppingcart},
		{path: "/search", component: search},
		{path: "/home/newslist", component: newslist},
		{path: "/home/share", component: share},
		{path: "/home/shop", component: shop},
		{path: "/home/feedback", component: feedback},
		{path: "/home/movie", component: movie},
		{path: "/home/call", component: call}
	]
})

//ES6 语法
export default router