'use strict'
const Service = require('egg').Service

class UserService extends Service {
  async create(user) {
    return this.ctx.model.User.create(user)
  }

  async getUser(id) {
    const user = await this.ctx.model.User.findByPk(id)
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user
  }
}

module.exports = UserService
