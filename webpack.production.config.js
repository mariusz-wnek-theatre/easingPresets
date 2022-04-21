const path = require('path');
const MiniCssExtractPugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let webpack = require('webpack');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /redux$/,
        resolve: {
          mainFields: ['module', 'main', 'unpkg'],
        },
      },
    ],
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './public'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      //<--key to reduce React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new MiniCssExtractPugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: './src/static', to: 'static' }],
    }),
  ],
};
