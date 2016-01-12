const path = require("path");
const webpack = require("webpack");
const entry = require('./js/entry');

module.exports = {
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
  entry: entry,
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: '[name]-bundle.js',
    publicPath: '/static/'
  },
  externals: {
    "jquery": "jQuery",
  },
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loader:'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      include: path.join(__dirname, 'js')
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\.woff$/,
      loader: 'url-loader?prefix=font/&limit=5000'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};