const webpack = require('webpack')
const path= require('path')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry:'./app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      options: {
        presets: [
          ['es2015', {modules: false}]
        ]
      }
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
       $: 'jquery',
       jQuery: 'jquery',
       'window.jQuery': 'jquery',
       Popper: ['popper.js', 'default'],
       // In case you imported plugins individually, you must also require them here:
       Util: "exports-loader?Util!bootstrap/js/dist/util",
       Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
     })
  ]
}
module.exports = config
