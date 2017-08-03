/**
 * Created by dell on 2017/8/3.
 */
var path = require('path');    //用于获取根路径
var webpack = require('webpack');       //webpack 核心
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                //   plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }
};