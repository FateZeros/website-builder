'use strict'

const Controller = require('egg').Controller

/**
 * @controller login 登录接口
 */
class LoginController extends Controller {
  /**
   * @summary 用户登录
   * @description 用户登录 & 获取用户信息
   * @router post /api/v1/login
   * @request body loginRequest *body
   * @response 200 loginResponse 用户信息
   */
  async get() {
    const { ctx } = this
    const loginParams = ctx.request.body
    console.log(loginParams)
  }
}

module.exports = LoginController
