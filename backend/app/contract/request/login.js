'use strict'

module.exports = {
  loginRequest: {
    userName: {
      type: 'string',
      required: true,
      description: '用户姓名'
    },
    passWord: {
      type: 'string',
      required: true,
      description: '密码'
    }
  }
}
