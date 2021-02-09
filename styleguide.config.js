const path = require('path');
const staticPath = path.resolve(__dirname)
console.log(staticPath)
console.log(path.join(staticPath, 'src/common-components'))

module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
    moduleAliases: {
        '7g-components': path.join(staticPath, 'src/common-components'),
    },
	webpackConfig: {
		devServer: {
			// Docs: https://codesandbox.io/docs/environment#how-can-i-tell-if-i-am-in-a-container-sandbox
			disableHostCheck: !!process.env.CODESANDBOX_SSE,
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true
							}
						},
					],
				},
			],
		},
	},
};
