const path = require('path');

module.exports = {
  watch: true,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
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
};
