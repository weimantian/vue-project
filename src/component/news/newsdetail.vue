<template>
<div class="context">
    <div>
    	<!-- 新闻标题 -->
        <h4 class="title">{{ news.title }}</h4>
        <!-- 子标题 -->
        <div class="info">
            <span class="issuingtime">发表时间：{{ news.create_time }}</span>
            <span class="clicktimes">点击 {{ news.click_times}} </span>
        </div>
        <hr>
    </div>
    <!-- 新闻内容 -->
    <div v-html="news.content">
    	
    </div>
    <!-- 评论区域 -->
    <comment-box :id="this.id"></comment-box>
</div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from '../subComponent/comment.vue'

export default{
	data() {
		return {
			id: this.$route.params.id,
			news: {}
		}
	},
	created() {
		this.getNewsDetail();
	},
	methods: {
		getNewsDetail () {
			this.$http.get("http://localhost:9090/public/news/news.json").then(result => {
				// console.log(result.body);
				var newslist = result.body;
				
				if (result.status === 200) {
					for (var i = 0; i < newslist.length; i++) {
						if (newslist[i].id.toString() === this.id) {
							this.news = newslist[i];
							console.log(newslist[i]);
						}
					}
				} else {
					Toast("新闻详情获取失败！");
				}
		
			})
		}
	},
	components: {//注册子组件的节点
		'comment-box': comment
	}

}

</script>
<style >
	.context {
		padding: 2px 4px 40px 4px;
	}
	
	.news-contenr
	.title {
		line-height: 22px;
	}

	.info {
		height: 21px;
		color: #226AFF;
		margin: 5px 0;
	}

	.issuingtime {
		float: left;
	}

	.clicktimes {
		float: right;
	}

	.news-container img {
		width: 100%;
	}
</style>