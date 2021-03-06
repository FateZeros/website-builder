/* eslint valid-jsdoc: "off" */
'use strict'

const { devConfig } = require('../database')
const { selfConfig } = require('./index')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616731113045_2390'

  // add your middleware config here
  // config.middleware = []
  config.middleware = ['errorHandler']
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/api'
  }

  // 安全配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']
  }

  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH'
  }

  // swagger 文档
  config.swaggerdoc = {
    // 插件扫描的文档路径
    dirScanner: './app/controller',
    apiInfo: {
      title: 'swagger 文档',
      description: 'website builder swagger 文档',
      version: '1.0.0'
    },
    // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html
    consumes: ['application/json', 'multipart/form-data'],
    // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
    produces: ['application/json', 'multipart/form-data'],
    schemes: ['http', 'https'],
    // 是否自动生成route
    routerMap: true,
    enable: true,
    enableSecurity: true,
    securityDefinitions: {
      apikey: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    }
  }

  // sequelize
  config.sequelize = {
    dialect: 'mysql',
    host: devConfig.host,
    port: devConfig.port,
    database: devConfig.database,
    username: devConfig.username,
    password: devConfig.password,
    timezone: '+08:00',
    define: {
      // 所有驼峰命名格式化
      underscored: false
    }
  }

  // jwt
  config.jwt = {
    secret: selfConfig.jwtSecret,
    enable: true,
    // match 和 ignore 不可同时存在 /api/v1/* 不包含 login/register
    match: /^\/api\/v1\/(?!(login|register))/
    // 不需要验证的接口,
    // ignore: ['/api/v1/login', '/api/v1/register']
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig
  }
}
