const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(css|less)$/,
        include: path.join(__dirname, '..', 'src', 'theme'),
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(css|less)$/,
        exclude: path.join(__dirname, '..', 'src', 'theme'),
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              includePaths: [path.join(__dirname, '..', 'src', 'theme')],
              paths: [
                path.join(__dirname, '..', 'node_modules'),
                path.join(__dirname, '..', 'src', 'theme'),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Quartermaster | Development',
      template: path.join(__dirname, '..', 'public', 'index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '..', 'public'),
    hot: true,
    port: 9090,
    proxy: {
      '/api': 'http://localhost:9092',
    },
  },
});
