'use strict'

const { factory } = require('factory-girl')

module.exports = app => {
  // 可以通过 app.factory 访问 factory 实例
  app.factory = factory

  // 定义 user 和默认数据
  factory.define('users', app.model.Users, {
    user_name: factory.sequence('Users.user_name', n => `testName_${n}`),
    age: 18
  })
}
