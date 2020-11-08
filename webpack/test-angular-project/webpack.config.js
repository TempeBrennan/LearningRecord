const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, 'main.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', 'html']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                /**css loader 处理css文件里头的内容，style loader负责插入到html里头 */
                use: ['style-loader', 'css-loader'],
                exclude: path.resolve(__dirname, 'test.css')
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
                include: path.resolve(__dirname, 'test.css')
            },
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            }
        ]
    }
};