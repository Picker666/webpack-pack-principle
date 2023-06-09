const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'hidden-source-map',
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    filename: 'built.js',
    path: path.join(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-runtime"]],
          },
        },
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
  ],
  mode: 'development',
  devServer: {
    port: 3001,
    hot: true,
    static: {
      directory: path.join(__dirname, 'public')
    }
  },
  externals: {
    react: 'react',
    ['react-dom']: 'react-dom'
  }
}