import Vue from 'vue';


// 导入组件
import { Header, Swipe, SwipeItem ,Button} from 'mint-ui';
// 注册组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({

	state: {

	},
	mutations: {
		
	}
});

import App from './App.vue';

// 导入 vue-router
import VueRouter from 'vue-router';

import router from './router.js';
// 手动安装 Vuerouter
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

//导入格式化时间的组件
import moment from 'moment';

// 定义全局过滤器
Vue.filter('dataFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss") {
	return moment(dataStr).format(pattern);
});
// var  dataFormat = Vue.filter('dataFormat');
var vm = new Vue({
	el:'#app',
	data:{

	},
	// 挂载路由对象到 vm
	router: router,
	// 使用 render 渲染 App
	render: c=> c(App)
});