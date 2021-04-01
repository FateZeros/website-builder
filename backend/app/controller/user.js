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
    ctx.validate(ctx.rule.createUserRequest, ctx.request.body)
    const resUser = await service.user.createUser(user)
    ctx.status = 200
    ctx.body = {
      errorCode: 200,
      errorMsg: '创建成功',
      result: resUser
    }
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

    const user = await service.user.getUser(ctx.helper.parseInt(ctx.params.id))
    ctx.status = 200
    if (user) {
      ctx.body = {
        errorCode: 200,
        errorMsg: '',
        result: user
      }
    } else {
      ctx.body = {
        errorCode: 400,
        errorMsg: '没有找到用户',
        result: null
      }
    }
  }

  /**
   * @summary 删除用户
   * @description 删除用户信息
   * @router delete /v1/users/{id}
   * @request path string *id
   * @response 200 baseResponse 删除成功
   */
  async del() {
    const { ctx, service } = this
    const delUserId = ctx.helper.parseInt(ctx.params.id)
    await service.user.delUser(delUserId)
    ctx.status = 200
    ctx.body = {
      errorCode: 200,
      errorMsg: '删除用户成功',
      result: {
        id: delUserId
      }
    }
  }
}

module.exports = UserController
