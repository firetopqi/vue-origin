const proxy = require("http-proxy-middleware")
const devServer = require('./config/devServer')
module.exports = {
  devServer: {
    host: devServer.host,
    port: devServer.port,
    proxy: devServer.proxy
  }
}


