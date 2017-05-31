var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugIn = require("html-webpack-plugin");

module.exports={
    //入口文件
    entry:'./src/js/app.js',
    /*生成的文件*/
    output:{
        path:path.join(__dirname,"/dist"),
        filename:'js/move.js'
    },
    module:{
        loaders:[
            {test:/.css$/,loader:'style-loader!css-loader'}
        ]
    },
    plugins:[  //添加第三方插件
       new HtmlWebpackPlugIn({
           template:"./index.html",
           filename:'./default.html',
           inject:true,
           hash:true,
           minify:{//压缩设置
               removeComments:true,  //删除注释
               collapseWhitespace:true  //合并html空白字符

           }
       })
    ],
    devServer:{
        hot:true,
        contentBase:"./dist",
        port:8080,
        inline:true
    }
}
