
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
    reset: joi.func().required(),
    toJson: joi.func().required()
  }).unknown()
};