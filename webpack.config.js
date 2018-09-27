const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: './'
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['transform-object-rest-spread', 'transform-async-to-generator']
        }
      },
      {
       test: /\.scss$/,
       use: [
               'css-hot-loader',
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader'
           ]
     },
     {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
               name: "fonts/[name].[ext]"
            }
          }
        ]
     },
     {
       test: /\.(jpe?g|png|gif)$/i,
       loader:"file-loader",
       query:{
         name:'[name].[ext]',
         outputPath:'images/'
       }
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
    new MiniCssExtractPlugin({
    filename: "index.css"
  })
  ]
};
