const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

// change these variables to fit your project
const jsPath= './js';
const cssPath = './scss/';
const outputPath = 'dist';
const localDomain = 'http://lmseo.test';
const entryPoints = {
    // 'app' is the output name, people commonly use 'bundle'
    // you can have more than 1 entry point
    'app': jsPath + '/app.js',
    'style': cssPath + '/style.scss',
};

module.exports = {
    entry: entryPoints,
    output: {
        path: path.resolve(__dirname, outputPath),
        filename: '[name].js',
        assetModuleFilename: 'homepage/images/[name][ext][query]'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../[name].css',
        }),

        // Uncomment this if you want to use CSS Live reload

        new BrowserSyncPlugin({
            proxy: localDomain,
            files: [  '/*.css' ],
            injectCss: false,
        }, { reload: true, }),

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
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.sass$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: { indentedSyntax: true }
                        }
                    }
                ]
            },
            {
                mimetype: 'image/svg+xml',
                scheme: 'data',
                type: 'asset/resource',
                generator: {
                    filename: 'homepage/icons/[name]-[hash].svg[query]'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
};
