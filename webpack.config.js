const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  mode: "development",
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:5].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    host: "localhost",
    open: true
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
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react", "stage-0"],
            plugins: ["transform-decorators-legacy"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: "/.less$/",
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{ loader: "file-loader" }]
      }
    ]
  },
  optimization: {
    minimize: false, //是否压缩代码
    runtimeChunk: "single"
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 8989
    // }),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({ title: "自动化title" })
  ]
};
