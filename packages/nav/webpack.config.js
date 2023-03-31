const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: [".js"],
    },
    output: {
        publicPath: "http://localhost:4001/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "nav",
            filename: "remoteEntry.js",
            library: {type: 'var', name: 'nav'},
            exposes: {
                "./Header": "./src/Header"
            },
            shared: {
                ...deps
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Module Federation Example',
        }),
    ],
}
