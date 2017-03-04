var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var plugins = [];


var outpath = './build'
// var outpath = path.resolve(__dirname, 'build');

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        proxy: {
            "/api/*": {
                target: "https://cnodejs.org",
                secure: false
            }
        },
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        port:8080,
        open:true,
        inline: true,

    },
    entry: [   //文件入口
        './src/index.js',
        "./public/index.html"
    ],
    output: {  //出口  编译后的文件
        path: outpath,
        filename: 'bundle.js' //js姓名

    },
    module: {
        loaders: [
            {
                test: /\.html$/i,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                // exclude: [nodeModulesPath]用来排除不处理的目录
                exclude: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css?modules!postcss!sass'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: plugins,
    postcss: [autoprefixer]
};
