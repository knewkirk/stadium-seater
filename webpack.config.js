const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'dist/bundle.js',
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
        new ExtractTextPlugin('dist/styles.css')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
