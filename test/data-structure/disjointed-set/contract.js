
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    init: joi.func().required(),
    union: joi.func().required(),
    connected: joi.func().required(),
    size: joi.func().required(),
    toArray: joi.func().required()
  }).unknown()
};