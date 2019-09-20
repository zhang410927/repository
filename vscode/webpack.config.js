const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin');
module.exports={
    //入口 可以有一个或者多个
    entry:{ //表示入口文件在哪里的路径 需要用到path模块
        //main:["other.js","./src/main.js"]
        main:"./src/main.js"
    },
    //打包环境：development 测试 & production 发布项目 & none
    mode:"development",
    //出口只有一个
    output:{
        filename: "bundle.js", //制定文件名称
        path: path.resolve(__dirname,"../dist"), //制定打包好的文件输出到那个目录
        //根路径
        publicPath: "/"
    },
    plugins:[
        new htmlWebpackPlugin({//生成放进内存页面模版
            template:path.resolve(__dirname, 'src/index.html'),//模板路径
            filename:'index.html'//自动生成的HTML文件的名称
        }),
        new VueLoaderPlugin
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']} ,
             //正则表达式 匹配到css文件 采用use中的第三方loader
             //{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
             { test: /\.vue$/, use: 'vue-loader' }
        ]
     }
}