const { createProxyMiddleware } = require('http-proxy-middleware');

export default createProxyMiddleware({
    target: 'http://127.0.0.1:5008',
    changeOrigin: true,
})