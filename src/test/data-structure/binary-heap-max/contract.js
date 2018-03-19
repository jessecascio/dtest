
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    insert: joi.func().required(),
    remove: joi.func().required(),
    peek: joi.func().required(),
    size: joi.func().required(),
    isEmpty: joi.func().required(),
    clear: joi.func().required(),
    toArray: joi.func().required()
  }).unknown()
};