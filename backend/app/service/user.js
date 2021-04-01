'use strict'
const Service = require('egg').Service

class UserService extends Service {
  async createUser(user) {
    const resUser = this.ctx.model.Users.create(user)
    return resUser
  }

  async getUser(id) {
    const user = await this.ctx.model.Users.findByPk(id)
    return user
  }

  async delUser(id) {
    const user = await this.ctx.model.Users.findByPk(id)
    await user.destroy()
  }
}

module.exports = UserService
