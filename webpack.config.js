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
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
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
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebPackPlugin({
            inject: false,
            template: './src/index.html',
            filename: './index.html',
            minify: false,
        }),
    ],
};
