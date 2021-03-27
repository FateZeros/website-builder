'use strict'

module.exports = {
  createUserRequest: {
    userName: { type: 'string', required: true, description: '用户姓名' },
    sex: {
      type: 'string',
      required: true,
      enum: ['male', 'female'],
      description: '用户性别'
    },
    age: { type: 'integer', required: true, min: 1, description: '年龄' },
    email: {
      type: 'string',
      required: false,
      example: '123456@qq.com',
      format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      description: '邮箱'
    },
    phoneNumber: {
      type: 'string',
      required: false,
      example: '13500000002',
      format: /^1[34578]\d{9}$/,
      description: '电话'
    }
  }
}
