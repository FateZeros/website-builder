'use strict'

module.exports = {
  loginResponse: {
    errorCode: {
      type: 'integer',
      example: 200,
      description: '错误码'
    },
    errorMsg: {
      type: 'string',
      example: '',
      description: '错误消息'
    },
    data: {
      type: 'user',
      description: '返回信息'
    }
  }
}
