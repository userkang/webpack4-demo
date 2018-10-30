## 概要

一个简单的 webpack 4 的升级体验 demo

## 问题

webpack 4 目前线上环境 js 会自动压缩，但是如果同时需要 css 压缩的话，还是需要使用第三方的插件来完成。

```javascript
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  optimization: {
    // 生产坏境 js css 压缩配置
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    // 多个 css chunk 合并成一个css文件
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}
```

还有其他的一些问题，如果遇到了可以参考下代码中的配置。  
`webpack.config.js` 为本地开发环境配置。  
`webpack.production.config.js` 为线上环境配置。

## 安装

```bash
npm install
```

## 本地环境编译

```bash
npm run dev
```

## 启动本地服务

```bash
npm start
```

## 线上环境编译

```bash
npm run build
```
