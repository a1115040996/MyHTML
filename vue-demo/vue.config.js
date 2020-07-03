// const webpack = require('webpack')
module.exports = {
    publicPath: './',
    outputDir: (process.env.NODE_ENV === 'production') ? 'dist/buildProd' : 'dist/buildTest',
    configureWebpack: {
        plugins: [],
        externals: {
            'jQuery' : 'jQuery',
            'echarts': 'echarts'
        }
    }
};