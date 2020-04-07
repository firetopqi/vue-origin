const BASEURL = process.env.BASEURL
if (process.env.NODE_ENV === "devlopment") {
  exports.proxy = {
    "/api": {
      target: BASEURL,
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