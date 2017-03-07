const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');

const config = require('./config');
const manifest = require('../public/vendor-manifest.json');

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
          cssnext({
            features: {
              customMedia: false,
              mediaQueriesRange: false,
              customSelectors: false,
              attributeCaseInsensitive: false,
              colorRebeccapurple: false,
              colorHwb: false,
              colorHsl: false,
              colorGray: false,
              colorHexAlpha: false,
              overflowWrap: false,
            },
          }),
        ],
        context: __dirname,
      },
    }),

    new HtmlWebpackPlugin({
      template: config.templatePath,
    }),
  ],
};
