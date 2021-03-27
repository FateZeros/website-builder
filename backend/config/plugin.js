'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // 静态资源
  static: {
    enable: true
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  // swagger 文档
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc'
  },
  // mysql
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  // 验证
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  // sequelize
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
}
