const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const developmentConfiguration =
{
    output: {
        filename: 'main.js',
        publicPath: '/assets'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        })
    ]
}

module.exports = merge.smart(baseConfig, developmentConfiguration);