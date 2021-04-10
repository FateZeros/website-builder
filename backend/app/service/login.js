'use strict'
const Service = require('egg').Service
const crypto = require('crypto')
const { Op } = require('sequelize')
const { loginErrorCodes } = require('./errorCodes')

class LoginService extends Service {
  async login(params) {
    const { ctx, app } = this
    try {
      // 1. 加密密码
      params.password = crypto
        .createHash('md5')
        .update(params.password)
        .digest('hex')
      // 2. 登录用户名是否存在
      const loginUser = await ctx.model.Users.findOne({
        where: { userName: params.userName }
      })
      if (!loginUser) {
        return {
          code: 10001,
          msg: loginErrorCodes[10001]
        }
      }
      // 3. 密码是否正确
      const passwordIsRight = await ctx.model.Users.findOne({
        where: {
          [Op.and]: [
            {
              userName: params.userName
            },
            {
              password: params.password
            }
          ]
        }
      })
      if (!passwordIsRight) {
        return {
          code: 10002,
          msg: loginErrorCodes[10002]
        }
      }
      // 4. 登录生成token
      const token = app.jwt.sign(
        {
          name: params.userName
        },
        app.config.jwt.secret,
        {
          expiresIn: 60 * 60 * 24
        }
      )

      // 5. 更新 token
      await ctx.model.Users.update(
        {
          token
        },
        {
          where: {
            userName: params.userName
          }
        }
      )
      return loginUser
    } catch (err) {
      ctx.throw(500, '服务器错误')
    }
  }

  async register(params) {
    const { ctx, app } = this
    try {
      // 1. 查询用户名有没有被注册
      const userNameIsExist = await ctx.model.Users.findOne({
        where: { userName: params.userName }
      })
      if (userNameIsExist) {
        return { code: 10000, msg: loginErrorCodes[10000] }
      }
      // 2. 注册默认密码 - 123456
      params.password = crypto
        .createHash('md5')
        .update('123456')
        .digest('hex')
      // 3. 注册生成token
      params.token = app.jwt.sign(
        {
          name: params.userName
        },
        app.config.jwt.secret,
        {
          expiresIn: 60 * 60 * 24
        }
      )
      const registerUser = ctx.model.Users.create(params)
      return registerUser
    } catch (err) {
      ctx.throw(500, '服务器错误')
    }
  }
}

module.exports = LoginService
