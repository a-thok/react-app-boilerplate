const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('./webpack.config');
const config = require('./config');

module.exports = Object.assign({}, webpackConfig, {
  output: {
    path: config.distPath,
    publicPath: config.publicPath,
    filename: 'js/app.[chunkhash].js',
  },

  module: {
    rules: [
      ...webpackConfig.module.rules,

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?minimize&sourceMap&importLoaders=1&module&localIdentName=[hash:base64:5]',
            'postcss-loader',
          ],
          publicPath: '../',
        }),
      },
    ],
  },
  devtool: 'source-map',

  plugins: [
    ...webpackConfig.plugins,

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),

    new ExtractTextPlugin('css/app.[contenthash].css'),
  ],
});
