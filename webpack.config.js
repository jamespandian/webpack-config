const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

let mode = "development";
let target = "web";
if(process.env.NODE_ENV === 'production'){
    mode = "production";
    target= "browserslist";
}
module.exports ={
    mode : mode,
    target:target,

    devtool:"source-map",
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({template:"./src/index.html"})],
    resolve: {
      
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname + "dist"),
      assetModuleFilename: "images/[hash][ext][query]",
    },
  
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,

                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {publicPath:""},
                  },
                  "css-loader", "postcss-loader", "sass-loader"
                ],

              },
              {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type:  "asset",
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