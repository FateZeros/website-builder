'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_name: STRING(50),
    sex: INTEGER,
    age: INTEGER,
    email: STRING(30),
    created_at: DATE,
    updated_at: DATE
  })

  return User
}
