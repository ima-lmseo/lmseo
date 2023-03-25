const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const WebpackBar = require("webpackbar");
const path = require("path");

const outputPath = "dist";
const localDomain = "http://lmseo.test";
const homePageEntryPoints = {
  app: "./js/app.js",
  style: "./scss/style.scss",
};
const servicesEntryPoints = {
  app: "./js/internal/services/services.js",
  style: "./scss/internal/services/services.scss",
};

module.exports = [
  {
    entry: homePageEntryPoints,
    devtool: "source-map",
    resolve: {
      extensions: ["*", ".js"],
    },
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: "homepage/js/[name].js",
      assetModuleFilename: "homepage/images/[name][ext][query]",
    },
    plugins: [
      new WebpackBar(),
      new MiniCssExtractPlugin({
        filename: "../[name].css",
      }),
      new BrowserSyncPlugin(
        {
          proxy: localDomain,
          files: ["/*.css"],
          injectCss: false,
        },
        { reload: true }
      ),
    ],
    module: {
      rules: [
        {
          test: /\.s?[c]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: () => [require("autoprefixer")],
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.sass$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sassOptions: { indentedSyntax: true },
              },
            },
          ],
        },
        {
          mimetype: "image/svg+xml",
          scheme: "data",
          type: "asset/resource",
          generator: {
            filename: "homepage/icons/[name]-[hash].svg[query]",
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
  },
  {
    entry: servicesEntryPoints,
    devtool: "source-map",
    resolve: {
      extensions: ["*", ".js"],
    },
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: "internal/services/js/[name].js",
      assetModuleFilename: "internal/services/images/[name][ext][query]",
    },
    plugins: [
      new WebpackBar(),
      new MiniCssExtractPlugin({
        filename: outputPath + "internal/services/[name].css",
      }),
      new BrowserSyncPlugin(
        {
          proxy: localDomain,
          files: ["/*.css"],
          injectCss: false,
        },
        { reload: true }
      ),
    ],
    module: {
      rules: [
        {
          test: /\.s?[c]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: () => [require("autoprefixer")],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: ["node_modules/bootstrap/scss/"],
                },
              },
            },
          ],
        },
        {
          mimetype: "image/svg+xml",
          scheme: "data",
          type: "asset/resource",
          generator: {
            filename: "internal/services/icons/[name]-[hash].svg[query]",
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
  },
];
