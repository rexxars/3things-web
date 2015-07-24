/* eslint no-console: 0 */
var path = require('path');
var config = require('../webpack.config');
var webpack = require('webpack');
var clueless = require('clueless');
var WebpackDevServer = require('webpack-dev-server');
var httpPort = process.env.WDS_PORT || 6003;

var lessOptions = {
    sourceMap: { sourceMapFileInline: true },
    paths: [path.resolve(path.join(__dirname, '..', 'less'))],
    outputDir: path.join(__dirname, '..', 'public', 'css'),
    publicDir: path.join(__dirname, '..', 'public'),
    verbose: true
};

var server = new WebpackDevServer(webpack(config), {
    contentBase: path.join(__dirname, '..', 'public'),
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
});

server.listen(httpPort, 'localhost', function(err) {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at localhost:' + httpPort);
});

clueless(path.join(__dirname, '..', 'less'), lessOptions, function(err, file) {
    if (err) {
        return console.error(err);
    }

    server.io.emit('css', file);
});
