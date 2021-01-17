const path = require('path');

module.exports = {
    // entry: path.resolve(__dirname, 'main.js'),
    entry: {
        main: path.resolve(__dirname, 'main.js'),
        // print: path.resolve(__dirname, 'print.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
    mode: 'development',
    devtool: 'source-map',
    target: ['web', 'es5'],
}