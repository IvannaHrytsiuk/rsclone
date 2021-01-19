const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
  ],
};
