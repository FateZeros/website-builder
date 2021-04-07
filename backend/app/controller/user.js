'use strict'

const Controller = require('egg').Controller

/**
 * @controller user 用户接口
 */
class UserController extends Controller {
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/邮箱
   * @router post /api/v1/users
   * @request body createUserRequest *body
   * @response 200 getUserResponse 创建成功
   */
  async create() {
    const { ctx, service } = this
    const user = ctx.request.body
    ctx.validate(ctx.rule.createUserRequest, ctx.request.body)
    const resUser = await service.user.createUser(user)
    ctx.helper.requestSucc({ ctx, errorCode: 200, data: resUser })
  }

  /**
   * @summary 获取用户信息
   * @description 获取用户信息
   * @router get /api/v1/users/{id}
   * @request path string *id
   * @response 200 getUserResponse 用户信息
   */
  async get() {
    const { ctx, service } = this
    const user = await service.user.getUser(ctx.helper.parseInt(ctx.params.id))
    if (user) {
      ctx.helper.requestSucc({ ctx, errorCode: 200, data: user })
    } else {
      ctx.helper.requestSucc({ ctx, errorCode: 400, data: null })
    }
  }

  /**
   * @summary 删除用户
   * @description 删除用户信息
   * @router delete /api/v1/users/{id}
   * @request path string *id
   * @response 200 getUserResponse 删除成功
   */
  async del() {
    const { ctx, service } = this
    const delUserId = ctx.helper.parseInt(ctx.params.id)
    const delUser = await service.user.delUser(delUserId)
    if (delUser) {
      ctx.helper.requestSucc({
        ctx,
        errorCode: 200,
        data: {
          id: delUserId
        }
      })
    } else {
      ctx.helper.requestSucc({
        ctx,
        errorCode: 400,
        data: null
      })
    }
  }
}

module.exports = UserController
