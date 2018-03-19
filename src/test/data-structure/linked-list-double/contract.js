
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    add: joi.func().required(),
    addFirst: joi.func().required(),
    addLast: joi.func().required(),
    get: joi.func().required(),
    getFirst: joi.func().required(),
    getLast: joi.func().required(),
    indexOf: joi.func().required(),
    lastIndexOf: joi.func().required(),
    contains: joi.func().required(),
    count: joi.func().required(),
    size: joi.func().required(),
    reset: joi.func().required(),
    toArray: joi.func().required()
  }).unknown()
};