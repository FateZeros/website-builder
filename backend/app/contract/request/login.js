'use strict'

module.exports = {
  loginRequest: {
    userName: {
      type: 'string',
      required: true,
      description: '用户姓名'
    },
    password: {
      type: 'string',
      required: true,
      description: '密码'
    }
  },
  registerRequest: {
    userName: {
      type: 'string',
      required: true,
      description: '用户姓名'
    },
    email: {
      type: 'string',
      required: true,
      description: '邮箱',
      format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    }
  }
}
