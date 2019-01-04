const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        include: path.join(__dirname, '..', 'src', 'theme'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(__dirname, '..', 'src', 'theme')],
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: path.join(__dirname, '..', 'src', 'theme'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader?modules',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(__dirname, '..', 'src', 'theme')],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..'),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html'),
      filename: 'index.html',
      hash: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
