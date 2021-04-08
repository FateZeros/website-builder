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
      userName: {
        type: STRING(50)
        // field: 'user_name'
      },
      password: {
        type: STRING(20)
      },
      token: STRING(1024),
      sex: INTEGER,
      age: INTEGER,
      email: STRING(30),
      createdAt: {
        type: DATE
        // field: 'created_at'
      },
      updatedAt: {
        type: DATE
        // field: 'updated_at'
      }
    },
    {
      tableName: 'users',
      /*
       * 添加表格属性
       * 用驼峰样式 underscored: false，
       * 下划线样式 underscored: true
       */
      underscored: false
    }
  )

  return User
}
