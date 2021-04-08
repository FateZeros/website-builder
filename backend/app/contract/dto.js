'use strict'

module.exports = {
  user: {
    id: { type: 'string', description: 'id 唯一键' },
    userName: { type: 'string', description: '用户姓名' },
    sex: { type: 'string', description: '用户性别' },
    age: { type: 'integer', description: '年龄' },
    email: { type: 'string', description: '邮箱' },
    phoneNumber: { type: 'string', description: '电话' },
    token: { type: 'string', description: 'token' }
  }
}
