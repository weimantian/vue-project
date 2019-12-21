
const path = require('path')
//导入html-webpack-plugin包：在内存中生成html页面的插件
//只要是插件都一定要放到plugins节点中去
const htmlWebpackPlugin = require('html-webpack-plugin')
//新版本的vue-loader必须加载插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//导入style-loader css-loader包

//注意：webpack只能打包处理js类型的文件
//处理非js类型的文件需要合适的第三方 loader 加载器
//npm i style-loader css-loader -D
//图片类型文件  nom i url-loader file-loader -D, file-loader
//是url-loadr 内部定义的
module.exports = {
	// 指定入口文件
	entry: path.join(__dirname, './src/main.js'),
	//输出文件相关的配置
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins: [//配置插件节点
		//创建一个在内存中生成HTML页面的插件
		new htmlWebpackPlugin({
			//根据指定的摸版页面生成页面
			template: path.join(__dirname, './src/index.html'),
			//指定生成页面的名称
			filename: 'index.html'
		}),
		new VueLoaderPlugin()

	],
	module: {//这个节点用于配置所有第三方模块的匹配规则
		rules: [//所有第三方模块的匹配规则
			//所有以.css结尾的文件的匹配规则
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
			// {test: /\.jpg|png|gif|bmp|jepg$/, use:'url-loader'}
			// 当图片大小大于等于limit的值时，不会转为base64的字符串（单位byte)
			// name=【hash]-[name].[ext]解决加载两张同名的资源覆盖问题
			{test: /\.jpg|png|gif|bmp|jepg|ttf|svg$/, use:'url-loader?limit=39904&name=【hash:8]-[name].[ext]'},
			{test: /\.vue$/, use:'vue-loader'}
   

		]
	},
	resolve:{
		alias: {//修改vue在导入时候的包的路径
			'vue$': "vue/dist/vue.js",
			// 'vue-router$': "vue-router/dist/vue-router.js;"
		}
	}
}

//注意：webpack处理第三昂文件的过程
//1. webpack打包过程会校验文件类型
//2. webpack在打包是发现处理不了的文件，会在webpack.config.js中查找第三方loader规则
//3. 匹配到规则后会调用对应的loader来处理
//4. 调用loader是后往前依次调用，最后的loader调用完毕会把处理的结果
//进行打包合并，最终输出到bundle.js 中去


//在命令行输入webpack 或 webpack-de-server 做了以下步骤：
//1. webpack 发现并没有通过命令的形式，给他指定入口和出口
//2. webpack 在项目查找webpack.config.js 配置文件
//3. 找到配置文件后 webpack 会解析这个配置文件，最后导出配置对象
//4. 当webpack那放到配置对象后， 就拿到啦配置对象中指定的 入口 和 出口
//然后进行打包构建