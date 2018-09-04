
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    search: joi.func().required()
  }).unknown()
};