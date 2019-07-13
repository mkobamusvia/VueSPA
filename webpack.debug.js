const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode : 'production',
	entry : './src/index.js',
	target : 'web',
	output : {
		filename : 'vuespa.debug.js',
		path : path.join(__dirname,'dist')
	},
	externals: {
		jquery: 'jQuery'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env"
							]
						}
					}
				]
			}
		]
	},
	optimization: {
		minimize: false,
	},
};
