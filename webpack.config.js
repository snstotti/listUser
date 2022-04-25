const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/listUser/'
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: 'ts-loader',
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader","sass-loader"]
          }
        ]
      },
      devServer: {
        historyApiFallback: true,
      },
      resolve: {
        extensions: ['.d.ts','.tsx', '.ts', '.js'],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        })
      ]
}
