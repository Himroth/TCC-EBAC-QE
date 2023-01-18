const path = require('path');
require ('dotenv').config()

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    postCupom: 'performance\k6\tests\simulations\postCupom.test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].test.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
};