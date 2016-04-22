const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8080 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8080/dist'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
