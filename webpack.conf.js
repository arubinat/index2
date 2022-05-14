module: {
    loaders: [{
      test: /\.css$/,
      loader: 'css-loader!autoprefixer-loader?browsers=last 2 versions'
    }]
}