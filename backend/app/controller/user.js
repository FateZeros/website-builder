'use strict'

const Controller = require('egg').Controller

/**
 * @controller user 用户接口
 */
class UserController extends Controller {
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/邮箱
   * @router post /v1/users
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx, service } = this
    const user = ctx.request.body
    ctx.validate(ctx.rule.createUserReq, ctx.request.body)

    ctx.body = await service.user.createUser(user)
  }

  /**
   * @summary 获取用户信息
   * @description 获取用户信息
   * @router get /v1/users/{id}
   * @request path string *id
   * @response 200 getUserResponse 用户信息
   */
  async get() {
    const { ctx, service } = this
    const id = ctx.params.id

    ctx.body = await service.user.getUser(id)
  }
}

module.exports = UserController
