
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    sort: joi.func().required()
  }).unknown()
};