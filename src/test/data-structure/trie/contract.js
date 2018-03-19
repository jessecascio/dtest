
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    put: joi.func().required(),
    get: joi.func().required(),
    remove: joi.func().required(),
    contains: joi.func().required(),
    keysWithPrefix: joi.func().required(),
    keys: joi.func().required(),
    size: joi.func().required(),
    isEmpty: joi.func().required(),
    clear: joi.func().required()
  }).unknown()
};