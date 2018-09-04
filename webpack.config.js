const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  mode: "production",
  entry: {
    app:'./src/app.js'
  },
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  devServer:{
    contentBase:path.join(__dirname,'dist'),
    compress:true,
    port:9000,
    host:'localhost',
    open:true
  },
  // plugins:[
  //   // new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
  //   new HtmlWebpackPlugin({
  //       chunks:['index'],
  //       filename:'index.html',
  //       minify:{
  //           collapseWhitespace:true //折叠空白区域 也就是压缩代码
  //       },
  //       hash:true,
  //       title:'I love China',
  //       template: './src/index.html' //模板地址
  //   })
  // ],
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react'],
            }
        },
        exclude: /node_modules/
      },
      {
        test:'/\.less$/',
        use:[
          {loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'less-loader'}
        ]
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          {loader:'file-loader'}
        ]
      }
    ]
  },
  optimization:{
    minimize: true//是否压缩代码
  }

};
