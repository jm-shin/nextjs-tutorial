module.exports = {
  async rewrites() {
    return [
      {
        source: '/get',//api request path
        destination: 'http://localhost:5000',//목적 path
      },
    ]
  },
}
