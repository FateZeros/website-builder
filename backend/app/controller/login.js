'use strict'

const Controller = require('egg').Controller

/**
 * @controller login 注册&登录接口
 */
class LoginController extends Controller {
  /**
   * @summary 用户登录
   * @description 用户登录 & 获取用户信息
   * @router post /api/v1/login
   * @request body loginRequest *body
   * @response 200 loginResponse 用户信息
   */
  async login() {
    const { ctx } = this
    const loginParams = ctx.request.body
    console.log(loginParams)
  }

  /**
   * @summary 用户注册
   * @description 用户注册 & 获取用户信息 & 注册成功即登录
   * @router post /api/v1/register
   * @request body registerRequest *body
   * @response 200 registerResponse 用户信息
   */
  async register() {
    const { ctx } = this
    const registerParams = ctx.request.body
    console.log(registerParams)
  }
}

module.exports = LoginController
