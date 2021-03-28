'use strict'
const Service = require('egg').Service

class UserService extends Service {
  async createUser(user) {
    return this.ctx.model.Users.create(user)
  }

  async getUser(id) {
    const user = await this.ctx.model.Users.findByPk(id)
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user
  }

  async delUser(id) {
    const user = await this.ctx.model.Users.findByPk(id)
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    await user.destroy()
    this.ctx.status = 200
  }
}

module.exports = UserService
