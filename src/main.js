import Vue from 'vue';
import App from './App.vue';
// 导入 vue-router
import VueRouter from 'vue-router';

import router from './router.js';
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

// 手动安装 Vuerouter
Vue.use(VueRouter);
Vue.component(Header.name, Header);

var vm = new Vue({
	el:'#app',
	data:{

	},
	// 挂载路由对象到 vm
	router: router,
	// 使用 render 渲染 App
	render: c=> c(App)
});