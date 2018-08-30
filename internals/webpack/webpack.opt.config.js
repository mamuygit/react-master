const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require("cssnano");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const safeParser = require('postcss-safe-parser');

module.exports = {
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    // async + async chunks
                    chunks: 'all',
                    // import file path containing node_modules
                    test: /[\\/]node_modules[\\/]/
                },
                // common chunk
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'async',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                    output: {
                        comments: false,
                        beautify: false
                    },
                },
            })
        ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: {
                parser: safeParser,
                discardComments: {
                    removeAll: true,
                },
                // Run cssnano in safe mode to avoid
                // potentially unsafe transformations.
                safe: true,
            },
            canPrint: false,
        }),
    ],
}