const proxy = require("http-proxy-middleware")
const devServer = require('./config/devServer')
module.exports = {
  devServer: {
    disableHostCheck: true,
    host: devServer.host,
    port: devServer.port,
    proxy: devServer.proxy,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}


