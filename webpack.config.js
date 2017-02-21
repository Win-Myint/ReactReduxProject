var webpack = require('webpack');
var config = {
entry : './src/index.js',
output : {
    path : './public',
    filename : 'bundle.min.js'
},
module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
         {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
watch : true
}
module.exports = config;