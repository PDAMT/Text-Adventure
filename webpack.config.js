const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './client/src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx']
  }
}