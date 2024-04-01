const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../employee/src/index.js"), // Adjusted entry path
  output: {
    path: path.resolve(__dirname, "../employee/public"), // Adjusted output path
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../employee/public"), // Adjusted static directory path
    },
    compress: true,
    port: 9000,
  },
};
