var path = require('path');
var webpack = require('webpack');
var httpPort = process.env.WDS_PORT || 6003;
var isProd = process.env.NODE_ENV === 'production';

var entryPoint = './app/index';
var sharedPlugins = [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }),
    new webpack.NoErrorsPlugin()
];

module.exports = {
    devtool: isProd ? 'source-map' : 'eval-source-map',
    entry: isProd ? entryPoint : [
        'webpack-dev-server/client?http://localhost:' + httpPort,
        'clueless/wds-client?http://localhost:' + httpPort,
        'webpack/hot/only-dev-server',
        entryPoint
    ],
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'app.bundle.js',
        publicPath: '/js'
    },
    plugins: sharedPlugins.concat(
        isProd ? [
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.DedupePlugin()
        ] : [
            new webpack.HotModuleReplacementPlugin()
        ]
    ),
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: isProd ? ['babel'] : ['react-hot', 'babel'],
            include: path.join(__dirname, 'app'),
            exclude: /node_modules/
        }]
    }
};
