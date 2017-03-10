module.exports={

	entry:{

		index:"./index.js"
	},

	output:{
		path:"./dist/",
		filename:"[name].js"

	},

	module:{

		rules:[
     		 {test: /\.css$/, use: ['style-loader','css-loader']},

		]

	}



}