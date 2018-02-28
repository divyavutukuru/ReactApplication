//var webpack = require('webpack');
//var path = require('path');

module.exports = {
  devtool:'inline-source-map',
   entry:'./main.js',
        output: {
             path: './',
             filename: 'bundle.js'
         },
   /*resolve:{
     moduleDirectories:['node_modules' , 'src'],
     extensions: [' ','.js']
   },*/
   devServer: {
      inline: true,
      port: 3000
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
};
