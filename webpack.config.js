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
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            umd: process.env.BUILD_ENV
        })
    ]
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