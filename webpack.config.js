var HtmlWebpackPlugin = require('html-webpack-plugin')
var tsImportPluginFactory = require('ts-import-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
var CompressionPlugin = require('compression-webpack-plugin')
var webpack = require('webpack')
module.exports = {
    entry: {
        index: './src/index.tsx',
        App: './src/App.tsx',
        WhatsTheRating: './src/Core/WhatsTheRating.tsx',
        WhatsThePlan: './src/Core/WhatsThePlan.tsx',
        InitialPage: './src/Core/InitialPage.tsx',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devtool: '',
    devServer: {
        publicPath: '/',
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(tsx|js|ts)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'antd',
                                libraryDirectory: 'lib',
                                style: 'css',
                            }),
                        ],
                    }),
                    compilerOptions: {
                        module: 'es2015',
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: { source: false },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new CompressionPlugin({
            filename: '[path].br[query]',
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg|tsx|ts)$/,
            compressionOptions: { level: 11 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        usedExports: true,
    },
}
