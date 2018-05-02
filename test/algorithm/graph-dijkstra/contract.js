
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    pathTo: joi.func().required()
  }).unknown()
};