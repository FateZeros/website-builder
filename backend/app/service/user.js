'use strict'
const Service = require('egg').Service

class UserService extends Service {
  async createUser(user) {
    const { ctx } = this
    try {
      const resUser = ctx.model.Users.create(user)
      return resUser
    } catch (err) {
      ctx.throw(500, '服务器错误')
    }
  }

  async getUser(id) {
    const { ctx } = this
    try {
      const user = await ctx.model.Users.findByPk(id)
      return user
    } catch (err) {
      ctx.throw(500, '服务器错误')
    }
  }

  async delUser(id) {
    const { ctx } = this
    try {
      const user = await ctx.model.Users.findByPk(id)
      if (user) {
        await user.destroy()
      }
      return user
    } catch (err) {
      ctx.throw(500, '服务器错误')
    }
  }
}

module.exports = UserService
