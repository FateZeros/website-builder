'use strict'

const Controller = require('egg').Controller

/**
 * @controller login 注册&登录接口
 * [validate 文档](https://github.com/eggjs/egg-validate)
 * 需要处理校验信息，返回给前端故采用 app.validator.validate
 * ctx.validate 校验不通过，会直接 throw error
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
    const { ctx, app, service } = this
    const loginParams = ctx.request.body
    const errors = app.validator.validate(ctx.rule.loginRequest, loginParams)
    if (errors) {
      ctx.helper.requestFail({ ctx, errorCode: 400, data: errors })
    } else {
      const loginUser = await service.login.login(loginParams)
      if (loginUser.code) {
        ctx.helper.requestFail({ ctx, errorCode: 200, data: loginUser })
      } else {
        ctx.helper.requestSucc({ ctx, errorCode: 200, data: loginUser })
      }
    }
  }

  /**
   * @summary 用户注册
   * @description 用户注册 & 获取用户信息 & 注册成功即登录
   * @router post /api/v1/register
   * @request body registerRequest *body
   * @response 200 registerResponse 用户信息
   */
  async register() {
    const { ctx, service, app } = this
    const registerParams = ctx.request.body
    const errors = app.validator.validate(
      ctx.rule.registerRequest,
      registerParams
    )
    if (errors) {
      ctx.helper.requestFail({ ctx, errorCode: 400, data: errors })
    } else {
      const registerUser = await service.login.register(registerParams)
      // 注册发现有错误码时
      if (registerUser.code) {
        ctx.helper.requestFail({ ctx, errorCode: 400, data: registerUser })
      } else {
        ctx.helper.requestSucc({ ctx, errorCode: 200, data: registerUser })
      }
    }
  }
}

module.exports = LoginController
