
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    components: joi.func().required()
  }).unknown()
};