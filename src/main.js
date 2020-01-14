import Vue from 'vue';


// 导入组件
import { Header, Swipe, SwipeItem} from 'mint-ui';
// 注册组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

import App from './App.vue';

// 导入 vue-router
import VueRouter from 'vue-router';

import router from './router.js';
// 手动安装 Vuerouter
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

var vm = new Vue({
	el:'#app',
	data:{

	},
	// 挂载路由对象到 vm
	router: router,
	// 使用 render 渲染 App
	render: c=> c(App)
});