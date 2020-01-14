<template>
	<div class="app-container">
		<!-- <h1>这是app.vue组件</h1> -->
		<!-- 顶部 Header -->
		<mt-header fixed title="my first vue project"></mt-header>

		<!-- 中部 router-view -->
		<transition>
			<router-view></router-view>
		</transition>	
		
		<!-- 底部 Tabbar -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shoppingcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

	</div>
</template>

<script>

</script>
<style scoped>
	.app-container {
		padding-top: 40px;
		padding-bottom: 40px;
		overflow: hidden;
	}
	/* v-enter:定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。 */
	/* v-leave-to:定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。 */
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	/* v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。 */
	/* v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。 */
	.v-enter-active, .v-leave-active {
		/* opacity: 0; */
		transition: all 0.4s ease;

	}
	
</style>

