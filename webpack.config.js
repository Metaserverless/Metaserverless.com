const autoprefixer = require('autoprefixer');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const PORT = 8080;

module.exports = (env, argv) => {
  const production = argv.mode === 'production';

  return {
    entry: ['./src/index.js'],
    output: {
      filename: production ? '[name].[hash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devtool: production ? 'source-map' : 'eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, './src/index.html'),
      watchContentBase: true,
      hot: true,
      port: PORT,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !production,
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.(sass|scss)$/,
          include: path.resolve(__dirname, 'src/styles'),
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !production,
              },
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['node_modules'],
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          include: path.resolve(__dirname, 'src/images'),
          use: 'url-loader',
        },
        {
          test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
          use: 'file-loader',
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: production,
        },
      }),
      new MiniCssExtractPlugin({
        filename: production ? '[name].[hash].css' : '[name].css',
        chunkFilename: production ? '[id].[hash].css' : '[id].css',
      }),
    ],
    optimization: {
      minimizer: [
        new TerserJSPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            compress: {
              comparisons: false,
              keep_infinity: true, // eslint-disable-line camelcase
            },
            keep_fnames: true, // eslint-disable-line camelcase
          },
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
  };
};
