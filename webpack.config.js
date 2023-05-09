const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'built.js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'development'
}