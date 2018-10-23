const path = require('path');
const HtmlWebpackPlugin = require('HtmlWebpackPlugin');
const CleanWebpackPlugin = require('CleanWebpackPlugin');

module.exports = {
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/api" : "http://localhost:8080"
        }
    },
    plugins: [
        new CleanWebpackPlugin(dist)
    ],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Greeting page'
        })
    ],
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(_dirname, 'dist')
    }
}