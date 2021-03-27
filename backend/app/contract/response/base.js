'use strict'

module.exports = {
  baseResponse: {
    result: { type: 'boolean', required: true },
    errorMsg: { type: 'string' },
    errorCode: { type: 'integer', example: 200 }
  }
}
