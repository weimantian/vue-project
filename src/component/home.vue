<template>
	<div>
		<!-- <h1>home.vue组件</h1> -->
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="image in images" :key="image.id">
				<img :src=image.src alt="">
			</mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/news.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/shaer.jpg" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/shop.jpg" alt="">
                <div class="mui-media-body">商品购物</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/feesback.jpg" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/movie.jpg" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/call.jpg" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
	</div>
</template>

<script>
export default {
	data() {
		return {
			images: [
				{id: 1, src: "../images/pic2.jpg"},
				{id: 2, src: "../images/pic3.jpg"},
				{id: 3, src: "../images/pic4.jpg"},
				{id: 4, src: "../images/pic5.jpg"},
			]
		}
	}
}
</script>
<style>
	.mint-swipe {
		width: 100%;
		height: 200px;
	}
	.mint-swipe .mint-swipe-item:nth-child(1) {
		/* background: url('../images/pic2.jpg') no-repeat; */
		background-color: red;
	}
	.mint-swipe .mint-swipe-item:nth-child(2) {
		/* background: url('../images/pic3.jpg') no-repeat; */
		background-color: yellow;
	}
	.mint-swipe .mint-swipe-item:nth-child(3) {
		/* background: url('../images/pic4.jpg') no-repeat; */
		background-color: green;
	}
	.mint-swipe .mint-swipe-item:nth-child(4) {
		/* background: url('../images/pic5.jpg') no-repeat; */
		background-color: blue;
	}
	.mint-swipe-item img {
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9 img {
		width: 50%;
		height: 50%;
	}
	
</style>

