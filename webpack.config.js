const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const copy = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const isDev = nodeEnv === 'development';

module.exports = (function makeWebpackConfig() {
    let config = {
        context: __dirname,
        mode: isDev ? 'development' : 'production'
    };

    config.entry = {
        app: './src/index.js'
    };

    config.output = {
        path: path.resolve(__dirname, 'assets'),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
    };

    config.devtool = isProd ? 'hidden-source-map' : 'cheap-module-source-map';

    config.resolve = {
        extensions: ['.js']
    };

    config.devServer = {
        contentBase: './',
        overlay: true,
        historyApiFallback: true,
        hot: true,
        noInfo: false,
        disableHostCheck: true
    };

    config.plugins = [
        // new CleanWebpackPlugin(['assets/js']),

        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),

        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin(),
    ];

    return config;
}());
