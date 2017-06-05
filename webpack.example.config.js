const path = require("path");
const webpack = require("webpack");


module.exports = {
    entry: {
        "example-common": "./examples/common/src/main.js"
    },

    output: {
        path: path.resolve("examples/common/build"),
        publicPath: "build",
        filename: "[name].min.js",
    },

    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader"  },
                    { loader: "less-loader" }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 20000,
                            name: "[name].[ext]",
                            outputPath: "images/"
                        }
                    },
                    "image-webpack-loader"
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
};