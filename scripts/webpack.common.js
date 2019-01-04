const path = require('path');

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'public/[name].[ext]',
            outputPath: 'dist',
          },
        },
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'public/[name].[ext]',
          outputPath: 'dist',
        },
      },
    ],
  },
};
