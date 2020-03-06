const path = require("path");

module.exports = {
  entry:"./src/index.js",
  output:{
    filename:"main.js",
    path:path.join(__dirname,"dist")
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader',
        ]
      },{
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
}