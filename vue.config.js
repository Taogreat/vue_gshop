const { defineConfig } = require('@vue/cli-service')
const px2rem = require('postcss-px2rem')
const path = require('path')

/* 根据指定目录名得到根目录的绝对路径 */
function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,//默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
  lintOnSave:false, //关闭EsLint的规则
  chainWebpack: config => {  //设置网页标题
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'gshop'
        return args
      })
  },
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        postcssOptions:{
          plugins: [
            px2rem({
              remUnit: 37.5   // 设计稿等分后的rem值   375/10
            })
          ]
        }
      }
    }
  },
  devServer: { //代理服务器
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:4000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      },
    }
  },
  /* 编写webpack支持的配置 */
  configureWebpack: { //内部写webpack原生配置
    resolve: {
      extensions: ['.js', '.vue', '.json'], //可以省略的后缀名
      alias: { //路径别名
        '@': resolve('src'),
        '@components': resolve('src/components'),
        '@pages': resolve('src/pages'),
      }
    },
  },
})
