const webpack = require("webpack");
const path    = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
    mode:"development",
    entry: './src/index.tsx',
    output: {
      path: "/dist",
      filename: "bundle.js",
      publicPath: '/'
    },
    devServer: {
      publicPath: "/",
      contentBase: "./dist",
      historyApiFallback: true,
      hot: true
    },
    resolve: {
      extensions: [".ts", ".tsx", '.js', '.css']
    },
    module:
    {
      rules:
        [ 
          {
            test: /\.(tsx|js|ts)$/,
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [ tsImportPluginFactory({
                  libraryName: 'antd',
                  libraryDirectory: 'lib',
                  style: 'css'
                }) ]
              }),
              compilerOptions: {
                module: 'es2015'
              }
            },
            exclude: /node_modules/
          },
          {
            test: /\.less$/,
            use: [
              {
                loader: 'style-loader', // creates style nodes from JS strings
              },
              {
                loader: 'css-loader', // translates CSS into CommonJS
              },
              {
                loader: 'less-loader', // compiles Less to CSS
              }
            ]
          },
          {
            test: /.css$/,
            use: [ 'style-loader', 'css-loader' ],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ] 
}