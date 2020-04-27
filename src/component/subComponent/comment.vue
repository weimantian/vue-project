<!-- 评论子组件 -->
<!-- 1. 在需要使用子组件的页面中导入子组件 -->
<!-- import subComponent from ''-->
<!-- 2. 在父组件中，使用'components' 属性，将子组件注册为自己的子组件 -->
<!-- 3. 将注册子组件啥时候的注册名称已标签的形式在页面中引用 -->

<template>
	<div>
		<h3>发表评论</h3>
		<hr>
		<textarea name="" id="" placeholder="请输入评论内容（最多120个字符）" maxlength="120" v-model="content"></textarea>
		<mt-button type="primary" size="large" @click="addCmmList()" >提交</mt-button>
		<div v-for="item in commentList" :key="item.id" class="cmm">
				<div class="cmm-title">
					<span>评论人：{{item.commentator}}</span>
					<span>评论时间：{{item.time}}</span>
				</div>
				<div class="cmm-content">
					<span>评论内容：{{item.content}}</span>
				</div>
		</div>

	</div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
	data() {
		return {
			commentList: [],
			length: 0,
			content:""
		}
	},

	props: ["id"],

	created() {
		this.getCmmlist();
	},
	methods: {
		dateFormate(dateStr) {//时间格式化
    		var date = new Date(dateStr);

    		var y = date.getFullYear().toString().padStart(2, '0');
    		var m = (date.getMonth()+1).toString().padStart(2, '0');
    		var d = date.getDay().toString().padStart(2, '0');
    		var hh = date.getHours().toString().padStart(2, '0');
    		var mm = date.getMinutes().toString().padStart(2, '0');
    		var ss = date.getSeconds().toString().padStart(2, '0');

    		return `${y}-${m}-${d} ${hh}:${mm}:${ss}`; 
    	},
		getCmmlist() {
			this.$http.get("http://localhost:9090/public/news/"+ this.id +".json").then(result => {
				// console.log(result);
				if (result.status === 200 && result.body !== "") {

					this.commentList = result.body.reverse();
					this.length = this.commentList.length;
					// console.log(this.commentList);
					// console.log(this.commentList.reverse());

				} else {
					Toast("获取新闻列表失败！");
				}
			});
		},
		addCmmList() {
			if(this.content) {
				// console.log(this.content);
				this.$http.post('http://localhost:9090/addcmm?id='+this.id,{"commentator":"匿名","content":this.content},{emulateJSON:true}).then(function(res){

                   		// document.write(res.body);    
                	},
                	function(res){

                    	// console.log(res.status);
                	});
					this.getCmmlist();
			} else {
				Toast("评论不能为空");
			}
		}
	}
}
	
</script>

<style scoped>
	.cmm {
		font-size: 12px;
		color: #8f8f94;
		margin-top: 5px;
		padding-left: 4px;
		padding-right: 4px;
	}
	.cmm-title {
		display: flex;
		justify-content: space-between;
	}
	.cmm .cmm-content {
		background-color: #fff;
	}
</style>