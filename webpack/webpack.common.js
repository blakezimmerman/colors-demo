const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src/');

module.exports = {
  entry: path.resolve(APP_DIR, 'index.js'),

  resolve: {
    extensions: ['.js']
  },

  module : {
    loaders : [
      {
        test : /\.js/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
