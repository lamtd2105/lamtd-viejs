const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'production') {
    module.exports = require('./build/webpack.config.prod');
}else {
    module.exports = require('./build/webpack.config.dev');
}