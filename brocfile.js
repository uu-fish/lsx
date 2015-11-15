// Generated by LiveScript 1.3.1
(function(){
  var jade, stylus, live;
  jade = require('broccoli-jade')(
  'lab/jade');
  stylus = require('broccoli-autoprefixer')(
  require('broccoli-stylus')(
  'lab/stylus'));
  live = require('broccoli-webpack-cached')('lab/live', {
    entry: {
      main: "index.ls"
    },
    output: {
      filename: "index.js",
      chunkFilename: "[id]-chunk.js"
    },
    module: {
      loaders: [{
        test: /\.ls$/,
        loader: 'livescript'
      }]
    },
    resolve: {
      extensions: ["", '.js', '.ls']
    }
  });
  module.exports = new (require('broccoli-merge-trees'))([jade, stylus, live]);
}).call(this);
