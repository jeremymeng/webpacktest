module.exports = {
  mode: 'development',
  node: {
    fs: "empty"
 },
 output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolveLoader: {
    modules: [__dirname, 'node_modules'],
    extensions: [ '.js' ],
    mainFields: ['loader', 'main']
  }
};