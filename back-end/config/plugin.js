'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
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
  }
}
