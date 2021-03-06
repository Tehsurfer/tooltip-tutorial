const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
    library: 'tut',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};