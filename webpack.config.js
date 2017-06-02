const path = require("path");
const webpack = require("webpack");


let options = {
    entry: {
        "tinkoff-chart": "./src/tinkoff-chart.jsx"
    },

    externals: [
        {
            "react": {
                root: "React",
                commonjs2: "react",
                commonjs: "react",
                amd: "react"
            }
        }
    ],

    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.jsx$/,
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

    plugins: []
};

switch (process.env.BUILD_ENV) {
    case "umd":
        options.output = {
            path: path.resolve("dist"),
            filename: "[name].umd.js",
            sourceMapFilename: "[name].umd.js.map",

            library: "TinkoffChart",
            libraryTarget: "umd"
        };

        break;

    case "common":
        options.output = {
            path: path.resolve("dist"),
            filename: "[name].common.js",
            sourceMapFilename: "[name].common.js.map",

            libraryTarget: "commonjs2"
        };

        break;
}

if (process.env.NODE_ENV === "production") {
    options.output.filename = `[name].${process.env.BUILD_ENV}.min.js`;

    options.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    );
}


module.exports = options;