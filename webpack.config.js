const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    rules: [
        {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        }
    ],
    plugins: [
        new HtmlWebPackPlugin({
            template:"./src/client/views/index.html",
            filename:"./index.html"
        })
    ]
}