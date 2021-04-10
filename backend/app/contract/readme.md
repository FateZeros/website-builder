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

## api key

在 `constract` 中加入以下代码，表示代码请求需要授权

```bash
* @request header string Authorization
* @apikey
```

可以在 swagger-doc 文档的右上角进行统一授权
