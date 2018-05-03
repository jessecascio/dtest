
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    distTo: joi.func().required(),
    pathTo: joi.func().required()
  }).unknown()
};