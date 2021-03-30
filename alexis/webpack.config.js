// const HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html'
    // filename: 'index.html',
    // inject: 'body'
});
var path = require('path')
// const { ContextExclusionPlugin } = require("webpack");

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname),
    entry: './app/index.js',
    module: {
        rules: [
            {
                // js loader
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']

            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: path.resolve(__dirname, '/build')
    },
    plugins: [HTMLWebpackPluginConfig]
};