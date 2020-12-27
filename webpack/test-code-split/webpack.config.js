var path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/',
        chunkFilename: '[name].mychunk.js',
    },
    devServer: {
        contentBase: './',
        index: './dist/index.html',
        // lazy: true,
        host: "192.168.1.4",
        // useLocalIp: true,
        // https: true,
        historyApiFallback: {
            rewrites: [{
                from: /\/missing/,
                to: '/404.html'
            }]
        },
        hot: true,
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}