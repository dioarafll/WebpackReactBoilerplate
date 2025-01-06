const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      /*      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65, // Set the quality of jpeg images
              },
              optipng: {
                optimizationLevel: 7, // Set the optimization level (0-7)
              },
              pngquant: {
                quality: [0.65, 0.9], // Define the quality range for png images
                speed: 4, // The speed of the compression
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75, // Set the quality of webp images
              },
            },
          },
        ],
      },*/
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules|__tests__/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules|__tests__/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxInitialRequests: 5,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },

  plugins: [
    /*
    new webpack.DefinePlugin({
      self: 'typeof self !== "undefined" ? self : {}',
    }),*/
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    /*  new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-report.html',
    }), */
  ],

  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Ganti contentBase dengan static
    },
    compress: true,
    host: 'localhost',
    allowedHosts: 'all',
    port: 8080,
    open: true,
    hot: true,
  },
};
