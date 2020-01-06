var HtmlWebpackPlugin = require('html-webpack-plugin')
var tsImportPluginFactory = require('ts-import-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.tsx',
        secondPage: './src/Core/SecondPage.tsx',
        thirdPage: './src/Core/ThirdPage.tsx',
        initialPage: './src/Core/InitialPage.tsx',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devtool: 'inline-source-map',
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
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: { source: false },
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}
