'use strict'

const { app } = require('egg-mock/bootstrap')
const factories = require('./factories')

before(() => {
  // defined app.factory for build test data
  factories(app)
})

afterEach(async () => {
  // clear database after each test case
  await Promise.all([app.model.Users.destroy({ truncate: true, force: true })])
})
