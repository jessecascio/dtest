
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    push: joi.func().required(),
    pop: joi.func().required(),
    isEmpty: joi.func().required(),
    size: joi.func().required(),
    reset: joi.func().required(),
    toArray: joi.func().required()
  }).unknown()
};