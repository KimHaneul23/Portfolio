// webpack.config.js
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['@babel/polyfill','./index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader"
        ]
      },
      {
          test: /\.(png|jpe?g|gif|svg|ico)$/,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: './img/',
              publicPath: './img/',
              name: '[name].[ext]?[hash]',
              limit: 10000 // 10kb
            }
          }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/env", {
                  "useBuiltIns": "entry",
                  "corejs": 3,
                  "targets": {
                    "browsers": ["last 3 versions", "ie >= 11"],
                    "node": "current"
                  }
                }
              ]
            ],
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        sourceMap: true
      }),
    ],
  },
}