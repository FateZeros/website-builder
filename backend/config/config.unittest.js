/* eslint valid-jsdoc: "off" */
'use strict'

const { testConfig } = require('../database')
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
  // add your middleware config here
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
    enable: true
  }

  config.sequelize = {
    dialect: 'mysql',
    host: testConfig.host,
    port: testConfig.port,
    database: testConfig.database,
    username: testConfig.username,
    password: testConfig.password,
    timezone: '+08:00',
    define: {
      // 所有驼峰命名格式化
      underscored: false
    }
  }

  // jwt
  config.jwt = {
    secret: selfConfig.jwtSecret
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
