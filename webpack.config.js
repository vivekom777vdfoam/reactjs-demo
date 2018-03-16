// var webpack = require('webpack');
// var path = require('path');

// var parentDir = path.join(__dirname, './');

module.exports = {
  entry: './index.js',
  module: {
    /*preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],*/
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          // presets: ['es2015']
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=/public/icons/[name].[ext]",
        /*test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]*/
      }
      /*{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }*/
    ]/*,
    rules: [
      { test: /\.css$/, loaders: 'style-loader!css-loader' }
    ]*/
  },
  output: {
    path: __dirname + '/dist/',
    // path: parentDir + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true
  }
}
