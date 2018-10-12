
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    init: joi.func().required(),
    update: joi.func().required(),
    sum: joi.func().required()
  }).unknown()
};