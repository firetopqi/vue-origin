const baseUrl = process.env.BASEURL
if (process.env.NODE_ENV === "development") {
  console.log(`Develop Proxy forwarding table, Proxy address: <${baseUrl}>`)
  exports.proxy = {
    "/api": {
      target: baseUrl,
      changeOrigin: true,
      ws: true,
      pathReWrithL: {
        "^/api": ""
      }
    }
  }
}
exports.host = process.env.HOST
exports.port = process.env.PORT