'use strict'

const { assert, app } = require('egg-mock/bootstrap')

describe('test/app/controller/user.test.js', () => {
  // describe('GET /v1/users', () => {
  //   it('should work', async () => {
  //     // 通过 factory-girl 快速创建 user 对象到数据库中
  //     await app.factory.createMany('user', 3)
  //     const res = await app.httpRequest().get('/users?limit=2')
  //     assert(res.status === 200)
  //     assert(res.body.length === 2)
  //     assert(res.body[0].name)
  //     assert(res.body[0].age)
  //   })
  // })

  describe('POST /v1/users', () => {
    it('should work', async () => {
      app.mockCsrf()
      let res = await app
        .httpRequest()
        .post('/v1/users')
        .send({
          age: 10,
          user_name: 'name'
        })
      assert(res.status === 200)
      const resultId = res.body.result.id
      assert(resultId)

      res = await app.httpRequest().get(`/v1/users/${resultId}`)
      assert(res.status === 200)
      assert(res.body.result.user_name === 'name')
    })
  })

  describe('GET /v1/users/:id', () => {
    it('should work', async () => {
      const users = await app.factory.create('users')
      const res = await app.httpRequest().get(`/v1/users/${users.id}`)
      assert(res.status === 200)
      assert(res.body.result.age === users.age)
    })
  })

  describe('DELETE /v1/users/:id', () => {
    it('should work', async () => {
      const users = await app.factory.create('users')
      app.mockCsrf()
      const res = await app.httpRequest().delete(`/v1/users/${users.id}`)
      assert(res.status === 200)
    })
  })
})
