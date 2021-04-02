'use strict'

module.exports = {
  getUserResponse: {
    id: {
      type: 'integer',
      description: '用户ID'
    },
    userName: {
      type: 'string',
      description: '用户姓名'
    },
    sex: {
      type: 'integer',
      description: '用户性别'
    },
    age: { type: 'integer', description: '年龄' },
    email: {
      type: 'string',
      description: '邮箱'
    },
    phoneNumber: {
      type: 'string',
      description: '电话'
    }
  }
}
