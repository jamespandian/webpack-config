const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
if(process.env.NODE_ENV === 'production'){
    mode = "production";
}
module.exports ={
    mode : mode,
    devtool:"source-map",
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
      
      extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
              },
             {
            test: /\.m?jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
               
                
                  "presets": [
                    [
                      "@babel/preset-env",
                      {
                        "targets": {
                          "node": "10"
                        }
                      }
                    ],
                    ["@babel/preset-react",{runtime:"automatic"}]
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