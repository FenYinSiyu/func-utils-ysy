const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'), // 入口文件路径
  output: {
    path: path.resolve(__dirname, 'build'), // 打包输出的路径
    filename: 'utils.js' // 打包输出的文件名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // JavaScript文件
        use: 'babel-loader', // 使用Babel加载器处理
      },
      // 其他规则...
    ],
  },
  mode: 'production'
};
