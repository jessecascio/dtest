
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    acyclic: joi.func().required()
  }).unknown()
};