//entry -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //setup loader
    module: {
        rules: [{
            loader: 'babel-loader',
            // all files end on .js
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use:
                [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
