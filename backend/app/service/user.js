'use strict'
const Service = require('egg').Service
const UUID = require('uuid')

class UserService extends Service {
  async createUser() {
    const { ctx } = this
    try {
      const id = UUID.v1()
    } catch {}
  }

  async getUser(id) {}
}

module.exports = UserService
