const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const productionConfiguration =
{
    output: {
        filename: '[id].[chunkhash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSflash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
        })
    ]
}

module.exports = merge.smart(baseConfig, productionConfiguration, optimizationConfig);