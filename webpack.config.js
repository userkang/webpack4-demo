const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 一般开发环境：cheap-module-eval-source-map
  // 生产环境：cheap-module-source-map
  devtool: 'cheap-module-eval-source-map',
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public', // 本地服务器工作目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    hot: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // 指定 css 的类名格式
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版本所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
