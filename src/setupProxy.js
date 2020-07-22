const { createProxyMiddleware } = require('http-proxy-middleware');

// https://create-react-app.dev/docs/proxying-api-requests-in-development/
module.exports = function (app) {
    app.use('/login', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true })
    );
}