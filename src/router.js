
//1. 导入vue-router
import VueRouter from 'vue-router'

//导入组件
import home from './component/home.vue'
import member from './component/member.vue'
import shoppingcart from './component/shoppingcart.vue'
import search from './component/search.vue'
//3. 创建路由对象
var router = new VueRouter({
	routes: [
		{path: "/", component: home},
		{path: "/home", component: home},
		{path: "/member", component: member},
		{path: "/shoppingcart", component: shoppingcart},
		{path: "/search", component: search}
	]
})

//ES6 语法
export default router