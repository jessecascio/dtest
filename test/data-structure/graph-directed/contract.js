
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    addVertice: joi.func().required(),
    addEdge: joi.func().required(),
    adjacent: joi.func().required(),
    connected: joi.func().required(),
    searchDepth: joi.func().required(),
    searchBreadth: joi.func().required(),
    preOrder: joi.func().required(),
    postOrder: joi.func().required(),
    toString: joi.func().required()
  }).unknown()
};