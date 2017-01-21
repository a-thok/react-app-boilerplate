const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const postcssVariables = require('postcss-css-variables');

const config = require('./config');
const manifest = require('../public/react-manifest.json');

module.exports = {
  entry: [
    config.srcPath,
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: config.srcPath,
      },

      {
        test: /\.(ico|jpg|jpeg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:6].[ext]',
        },
      },
    ],
  },

  resolve: {
    modules: [
      config.srcPath,
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest,
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          postcssImport({
            path: [config.srcPath],
          }),
          autoprefixer(),
          postcssVariables(),
        ],
        context: __dirname,
      },
    }),

    new HtmlWebpackPlugin({
      template: config.templatePath,
    }),
  ],
};
