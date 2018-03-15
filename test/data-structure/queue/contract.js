
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    enqueue: joi.func().required(),
    dequeue: joi.func().required(),
    isEmpty: joi.func().required(),
    size: joi.func().required(),
    clear: joi.func().required(),
    toArray: joi.func().required()
  }).unknown()
};