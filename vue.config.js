/* eslint-disable no-undef */
const path = require("path");
const vueSrc = "./src";
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = {
    assetsDir: "assets",
    css: {
        loaderOptions: {
            scss: {
                sourceMap: true,
                implementation: require("sass"),
            },
        },
    },
    configureWebpack: {
        resolve: {
            plugins: [PnpWebpackPlugin],
            alias: {
                "@": path.resolve(__dirname, vueSrc),
            },
            extensions: [".js", ".vue", ".json"],
        },
        resolveLoader: {
            plugins: [PnpWebpackPlugin.moduleLoader(module)],
        },
    },
};
