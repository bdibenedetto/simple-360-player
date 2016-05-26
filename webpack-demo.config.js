/* eslint-env node */
const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: './demo/index.js',
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015-loose'],
        },
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    alias: {
      main: `${__dirname}/src`,
      test: `${__dirname}/test`,
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  node: {
    console: false,
    global: true,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
};
