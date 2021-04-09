'use strict'

/**
 * @param {Egg.Application} app - egg application
 * [router 文档](https://eggjs.org/zh-cn/basics/router.html)
 * verb('routerName', 'pathMatch', controller)
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  // user
  router.resources('users', '/users', controller.user)

  // login
  router.post('login', '/login', controller.login)
  router.post('register', '/register', controller.login)
}
