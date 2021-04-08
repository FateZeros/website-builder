'use strict'

module.exports = {
  createUserRequest: {
    userName: {
      type: 'string',
      required: true,
      example: '张三',
      description: '用户姓名'
    },
    password: {
      type: 'string',
      required: false,
      example: 'admin123456',
      description: '密码'
    },
    sex: {
      type: 'integer',
      required: false,
      enum: [0, 1],
      example: 0,
      description: '用户性别'
    },
    age: {
      type: 'integer',
      required: false,
      example: 18,
      min: 1,
      description: '年龄'
    },
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
