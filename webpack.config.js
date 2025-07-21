module.exports = {
  mode: 'production',
  entry: './src/App.js',
  resolve: {
    extensions: ['.js']
  },
  module: {
    parser: {
      javascript: {
        importExportsPresence: 'warn'
      }
    }
  }
}
