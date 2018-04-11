
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    enqueue: joi.func().required(),
    dequeue: joi.func().required(),
    peek: joi.func().required(),
    size: joi.func().required(),
    toArray: joi.func().required()
  }).unknown()
};