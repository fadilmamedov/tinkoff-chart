const path = require("path");


module.exports = {
    entry: {
        "example-common": "./examples/common/src/main.js"
    },

    output: {
        path: path.resolve("examples/common/build"),
        filename: "[name].js",
    },

    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};