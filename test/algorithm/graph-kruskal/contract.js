
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    size: joi.func().required(),
    mst: joi.func().required()
  }).unknown()
};