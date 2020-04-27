<template>
	<div>
		<ul class="mui-table-view" v-for="item in newslist" :key="item.id">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsdetail/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h5>{{ item.title}}</h5>
							<p class='mui-ellipsis'>
								<span class="span1">发表时间：{{ item.create_time | dataFormat}}</span>
								<span class="span2">点击：{{ item.click_times }} 次</span>
							</p>
						</div>
					</router-link>
				</li>
			</ul>
	</div>
</template>

<script>
import { Toast } from "mint-ui";

export default{
	data() {
		return{
			newslist: []
		}
	},
	created() {
		this.getNewsList();
	},
	methods: {
		getNewsList() {
			this.$http.get("http://localhost:9090/public/news/news.json").then(result => {
				// console.log(result);
				if (result.status === 200) {
					this.newslist = result.body;
				} else {
					Toast("获取新闻列表失败！");
				}
			});
		}
	}
}

</script>

<style scoped>
	.mui-table-view li h5 {
		font-size: 14px;
	}
	.mui-ellipsis {
		font-size: 12px;
		color: #226AFF;
	}
	.span1 {
		float: left;
	}
	.span2 {
		float: right;
	}
</style>