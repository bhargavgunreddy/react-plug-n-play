
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var jquery = require('jquery');
var react = require('react');
var ReactDOM = require('react-dom');

module.exports = {

	entry: {
				app: ['./js/app.js']
				
			},
	output: {
		path: './build',
		filename: '[name].finalbundle.js'
	},
	module:{
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
			  presets: ['es2015', 'react']
			}
		}]

	},
	plugins: [
		new webpack.ProvidePlugin({
	    	'ReactDOM':   'ReactDOM',
	    	'React':     'react',
	    	'$': 'jquery'
		}),

		new HtmlWebpackPlugin({  // Also generate a test.html
	      	template: 'template/build.html'
	    })
	]
};