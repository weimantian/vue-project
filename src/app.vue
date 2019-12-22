<template>
	<div class="app-container">
		<!-- <h1>这是app.vue组件</h1> -->
		<!-- 顶部 Header -->
		<mt-header fixed title="my first vue project"></mt-header>

		<!-- 中部 router-view -->
		<router-view></router-view>
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
	}
	
</style>

