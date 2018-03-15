
const joi = require('joi');

module.exports = {
  schema: joi.object().keys({
    addVertice: joi.func().required(),
    addEdge: joi.func().required(),
    connected: joi.func().required(),
    searchDepth: joi.func().required(),
    searchBreadth: joi.func().required(),
    components: joi.func().required(),
    separation: joi.func().required(),
    acylic: joi.func().required(),
    getVertices: joi.func().required(),
    getEdgeCount: joi.func().required(),
    getDegreeCount: joi.func().required(),
    maxDegree: joi.func().required(),
    size: joi.func().required(),
    clear: joi.func().required()
  }).unknown()
};