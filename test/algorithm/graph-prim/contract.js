
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    weight: joi.func().required(),
    mst: joi.func().required()
  }).unknown()
};