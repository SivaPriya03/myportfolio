const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');
const serverURL = 'http://localhost:3000';

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
      '/api/*': serverURL,
      '/assets/*': serverURL,
    },
  },
});
