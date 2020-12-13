const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./static/app.jsx",
    output: {
        path: path.resolve(__dirname, "public")
    },

    plugins: [
        new CleanWebpackPlugin(["public"]),
        new CopyWebpackPlugin([{
            from: "static",
            to: ""
        }]),
    ]
};
