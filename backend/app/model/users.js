'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  /**
   * 首字母大写的表名
   * define 参数: 表名，字段名，配置名
   */
  const User = app.model.define(
    'users',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userName: STRING(50),
      sex: INTEGER,
      age: INTEGER,
      email: STRING(30),
      phoneNumber: STRING(30),
      createdAt: DATE,
      updatedAt: DATE
    },
    {
      tableName: 'users'
      // 用驼峰样式自动添加属性 underscored: false，
      // 下划线样式 underscored: true
      // underscored: false
    }
  )

  return User
}
