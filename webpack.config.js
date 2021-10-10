const path = require('path');

module.exports = {

  // bundling mode
  mode: 'development',

  // entry files
  entry: './src/main.ts',

  devtool: 'source-map',

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, './'),
      watch: true,
    },
  },

  // file resolutions
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  watch: true,
};
