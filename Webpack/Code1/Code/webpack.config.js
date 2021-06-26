const path = require("path");

module.exports = {
    entry: "./src/app/app.jsx",
    output: {
        path: path.resolve(__dirname, "src/public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        }],
    }
};
