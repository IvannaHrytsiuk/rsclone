const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    performance: {
        maxEntrypointSize: 100000000,
        maxAssetSize: 100000000,
    },
    entry: {
        index: './src/index.js',
        flight: './src/flight.js',
        booking: './src/booking.js',
        register: './src/register.js',
    },
    output: {
        filename: '[name]build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ extractComments: false }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: (file) => {
                                const dirNameInsideAssets = path.relative(path.join(__dirname, 'src', 'assets'), path.dirname(file));
                                return `assets/${dirNameInsideAssets}/[name].[ext]`;
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/assets/geojson', to: 'assets/geojson' },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css',
        }),
        new HtmlWebPackPlugin({
            inject: false,
            template: './src/index.html',
            filename: './index.html',
            minify: false,
        }),
    ],
};
