const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./static/app.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },

    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{
                from: "static",
                to: "",
                globOptions: {
                    ignore: [
                        "*.jsx"
                    ]
                }
            }]
        })
    ],

    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["babel-preset-react"]
                }
            }
        }]
    },
};
