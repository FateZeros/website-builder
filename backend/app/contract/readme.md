# egg-swagger 文档

[egg-swagger 文档](https://github.com/Yanshijie-EL/egg-swagger-doc)

## 类型定义

```bash
'use strict';
module.exports = {
  createResource: {
    resourceId: { type: 'string', required: true, example: '1' },
    resourceNametrue: { type: 'string', required: true },
    resourceType: { type: 'string', required: true, enum: ['video', 'game', 'image'] },
    resourceTag: { type: 'array', itemType: 'string' },
    owner: { type: 'user', required: true },
    owners: { type: 'array', itemType: 'user' },
  },
};
```

基础类型：`string`, `interger`
枚举类型：`enum`
字符数组：`array`
自定义对象类型: 例如 `dto.js` 中的 `user` 类型
自定义数组对象类型: 例如 `type: array`, 且 `itemType: user`
