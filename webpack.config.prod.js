const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");

module.exports = {
    context: srcPath,
    entry: [
        "./js/index.prod.js"
    ],
    devtool: "source-map",
    output: {
        path: distPath,
        filename: "assets/[hash].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.module.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[hash:base64:5]"
                        }
                    }
                })
            },
            {
                test: /^((?!\.module).)*css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        options: {
                            minimize: "true"
                        }
                    }
                })
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: "assets/[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            mimetype: "application/font-woff",
                            name: "assets/[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            mimetype: "application/octet-stream",
                            name: "assets/[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            mimetype: "image/svg+xml",
                            name: "assets/[hash].[ext]"
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "static" },
        ]),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new ExtractTextPlugin(
            "assets/[hash].css"
        ),
        new HtmlWebpackPlugin({
            inject: "body",
            template: "index.template.ejs"
        })
    ]
};
