let path = require('path')
let webpack = require('webpack')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
let isProd = process.env.NODE_ENV === 'production'
let pathEntry = "./web/resources/assets/js/"
let pathOutput = path.resolve(__dirname, 'assets/js/app')

// entries
let entries = {
	"app": pathEntry + "main.js",
}


// output
let outputs = {
	path: pathOutput,
	publicPath: '/app/',
	filename: '[name].js',
	// filename: '[name].bundle.js',
	chunkFilename: '[id].bundle.js',
}



// plugins
let plugins = []

plugins.push(new VueLoaderPlugin())

// set devtools
let devtools;

let mode = "development"

// check NODE_ENV prod or dev
if (isProd) {

	// new devtools
	devtool = '#source-map'

	// set new plugin uglifyjs
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
			screw_ie8: true,
			conditionals: true,
			unused: true,
			comparisons: true,
			sequences: true,
			dead_code: true,
			evaluate: true,
			if_return: true,
			join_vars: true
		},
		output: {
			comments: false
		}
	}))

	// set new plugin loader
	plugins.push(new webpack.LoaderOptionsPlugin({
		minimize: true
	}))
	mode = "production"
} else {

	// new devools
	devtool = '#eval-source-map'
}

module.exports = {
	entry: entries,
	output: outputs,
	mode: mode,
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/,
				options: {
					loaders: {}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				exclude: /node_modules/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			// '@': resolve('src'),
			// '@': resolve(pathEntry),
		},
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	plugins: plugins,
	devtool: devtools
}