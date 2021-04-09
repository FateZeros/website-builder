'use strict'
const Service = require('egg').Service

class LoginService extends Service {
  async login(params) {
    const { ctx } = this
    try {
      console.log(params)
      // const loginUser = ctx.model.Users.create(params)
    } catch (err) {
      ctx.throw(500, '服务器错误')
    }
  }

  async register(params) {
    const { ctx } = this
    try {
      const registerUser = ctx.model.Users.create(params)
      return registerUser
    } catch (err) {
      ctx.throw(500, '服务器错误')
    }
  }
}

module.exports = LoginService
