module.exports = {
    entry: './app.js',
    output: {
        path: `${__dirname}/dist` ,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/, //loader for any file that ends with .css
                loader: 'style-loader!css-loader'
            },
        ]
    }
}