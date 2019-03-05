const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.pug$/,
        use: ["html-loader", "pug-html-loader"]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(png|jpg|gif|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[hash].[ext]",
              outputPath: "assets/",
              publicPath: "assets/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: ["src", "src/assets"],
    watchContentBase: true,
    hot: true,
    inline: true,
    compress: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/index.pug"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      disable: devMode ? true : false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
