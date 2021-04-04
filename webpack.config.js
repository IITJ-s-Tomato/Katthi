const  path  = require('path');
const HtmlPlugin  = require('html-webpack-plugin');


/*
  
    "sass": "^1.32.8",
    "sass-loader": "^11.0.1",
    "style-loader": "^2.0.0",
    "webpack": "^5.30.0",
    "webpack-cli": "^4.6.0",
    "webpack-dev-server": "^3.11.2"
*/
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_test.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
              }
        ]
    },
    plugins: [new HtmlPlugin(
        {
            template: './src/index.html'
        }
    )]
}