const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const webpackConfig = merge(commonConfig, {
    mode: 'production'
});

module.exports = webpackConfig;