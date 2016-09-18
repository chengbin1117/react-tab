var webpack = require('webpack');


module.exports = {
	entry:[
		 //'webpack-dev-server/client?http://localhost:8080',
		 //'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	module:{
		loaders:[{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.css$/, loader: "style!css"},
		 	{ test: /\.scss$/, loader: "style!css!sass"},
			{ test: /\.svg$/, loader: "url?limit=8192"}
	  ]


	},
	resolve:{
		extensions:['','.js']
	},
	output:{
		path:'dist/js',
		publicPath: 'js/',
		filename:'bundle.js'
	},

	 // plugins:[
	 // 	new webpack.HotModuleReplacementPlugin()
	 // ]

};
