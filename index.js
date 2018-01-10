/**
 * 模块依赖
 */

const Redis = require('ioredis');
const namespace = 'ibird-redis';
const api = {};

/**
 * 加载插件
 * @param app
 * @param options
 */
function onload(app, options) {
    const config = app.c();
    const cfg = config.redis || options.redis;
    api.redis = new Redis(cfg);
}

/**
 * 导出模块
 */
module.exports = {
    namespace,
    onload,
    api
};