const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourceDirectory = path.resolve(__dirname, 'test');
const targetDirectory = path.resolve(__dirname, 'dist');

console.log(sourceDirectory);

const plugins = [
  new ExtractTextPlugin('app-[contenthash:8].css'),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'test/index.html'),
    inject: 'body',
    minify: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }
  })
]

module.exports = {
  // context: sourceDirectory,
  entry: {
    app: `${__dirname}/test/index.js`,
  },
  output: {
    path: targetDirectory,
    filename: 'index.js',
    hashDigestLength: 8,
    libraryTarget: 'umd', // make the bundle export
  },
  devServer: {
    contentBase: sourceDirectory,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          ],
        }),
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: './resources/media/index/[name].[ext]'
          }
        }
      }
    ],
  },
  devtool: "source-map",
  plugins,
};