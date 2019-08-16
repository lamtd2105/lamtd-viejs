const webpack = require("webpack");
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const getProvideEnv = require('./../config/'+env+'.env')


const webpackConfig = {
    entry: path.join(__dirname, '..', 'src', 'main.js'),
    mode: env === 'production' ? 'production' : 'development',
    output: {
        publicPath: env === 'production' ? '/lamtd-vuejs/' : '/', // cdn
        path: path.resolve(__dirname, '..', './dist'),
        filename: 'bundle.[hash].js'
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json']
    },
    optimization: {
        splitChunks: {
            // Must be specified for HtmlWebpackPlugin to work correctly.
            // See: https://github.com/jantimon/html-webpack-plugin/issues/882
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, 'src')],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 200 * 1024,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin(getProvideEnv),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, '..', 'dist', 'index.html'),
            template: path.join(__dirname, '..', 'public', 'index.html'),
            inject: true,
        }),
    ],
};

module.exports = webpackConfig;