const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const webpackConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 8081,
        stats: {
            normal: true
        }
    }
});

module.exports = webpackConfig;