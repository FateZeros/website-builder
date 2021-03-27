/* eslint valid-jsdoc: "off" */
'use strict'

const { devConfig } = require('../database-config')
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
  config.middleware = []

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
      description: 'egg.js swagger-demo文档',
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

  // sql 配置
  // config.sql = {
  //   // database configuration
  //   client: {
  //     // host
  //     host: devConfig.host,
  //     // port
  //     port: devConfig.port,
  //     // username
  //     user: devConfig.user,
  //     // password
  //     password: devConfig.password,
  //     // database
  //     database: devConfig.database
  //   },
  //   // load into app, default is open
  //   app: true,
  //   // load into agent, default is close
  //   agent: false
  // }

  config.sequelize = {
    dialect: 'mysql',
    host: devConfig.host,
    port: devConfig.port,
    database: devConfig.database
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