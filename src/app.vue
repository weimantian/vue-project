<template>
	<div class="app-container">
		<h1>这是app.vue组件</h1>
		<!-- 顶部 Header -->
		<mt-header fixed title="my first vue project"></mt-header>

		<!-- 中部 router-view -->

		<!-- 底部 Tabbar -->
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
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

