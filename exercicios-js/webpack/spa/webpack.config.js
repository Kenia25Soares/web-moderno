const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'

  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'assets/js/app.min.js' : 'assets/js/app.js',
      assetModuleFilename: 'assets/fonts/[name][ext][query]',
      clean: true
    },
    devtool: isProd ? false : 'eval-source-map',
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 8081,
      hot: true,
      open: true
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: { includePaths: [path.resolve(__dirname, 'src/assets/sass')] }
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/paginas', to: 'paginas' },
          { from: 'src/assets/imgs', to: 'assets/imgs', noErrorOnMissing: true }
        ]
      }),
      ...(isProd
        ? [
            new MiniCssExtractPlugin({
              filename: 'assets/css/app.min.css'
            })
          ]
        : [])
    ]
  }
}
