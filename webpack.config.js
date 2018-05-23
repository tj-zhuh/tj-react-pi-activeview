var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname),
    filename: 'index.js',
    library: 'tj-react-pi-activeview',
    libraryTarget: "umd"
  },
  externals: {
    react: 'react'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        path.join(__dirname, 'src')
      ]
    }]
  }
}