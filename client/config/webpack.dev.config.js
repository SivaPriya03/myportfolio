const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  devServer: {
    static: './dist',
    proxy: {
      '/api/mydata': 'http://localhost:3000',
    },
  },
});
