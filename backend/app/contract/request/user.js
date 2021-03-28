'use strict'

module.exports = {
  createUserRequest: {
    user_name: { type: 'string', required: true, description: '用户姓名' },
    sex: {
      type: 'integer',
      required: true,
      example: 0,
      description: '用户性别'
    },
    age: {
      type: 'integer',
      required: true,
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
    phone_number: {
      type: 'string',
      required: false,
      example: '13500000002',
      format: /^1[34578]\d{9}$/,
      description: '电话'
    }
  }
}
