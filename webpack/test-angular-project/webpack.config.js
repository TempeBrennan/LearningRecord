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

                /**
                 * css loader 封装出来 这个模块
                 * "./node_modules/css-loader/dist/cjs.js!./test.css"
                 * 
                 * 里面最基本的就是把css文件的内容toString
                 */

                /**
                 * style loader 封装出来这个模块
                 * "./test.css"
                 * 
                 * 里头的内容就是西先拿到上面那个模块导出的内容，再接着生成style元素
                 * 封装进去内容，然后插入到页面里头去
                 */
                use: ['style-loader', 'css-loader'],
                exclude: path.resolve(__dirname, 'test.css')
            },
            {
                /**
                 * angular 希望能处理的模块内容仅仅是
                 * "h1 {color: red;}" 字符串
                 * 不是 css-loader 返回的复杂对象
                 */
                test: /\.css$/,
                use: ['css-to-string-loader', 'css-loader'],
                include: path.resolve(__dirname, 'test.css')
            },
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            }
        ]
    }
};