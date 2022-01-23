module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/TheWritingDesk/" : "/",
    devServer: {
        proxy: {
          '^/contact/': {
            target: 'http://localhost:8082',
            changeOrigin: true, // so CORS doesn't bite us. 
          }
        }
      }
};