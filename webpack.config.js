const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
if(process.env.NODE_ENV === 'production'){
    mode = "production";
}
module.exports ={
    mode : mode,
    devtool:"source-map",
    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
              },
             {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      },


    devServer : {
        contentBase : "./dist",
        hot:true
    }
}