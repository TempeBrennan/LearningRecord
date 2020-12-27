var path = require('path');

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
        contentBase: './dist'
    }
}