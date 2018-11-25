'use strict';

const q = require(`${process.cwd()}/src/data-structure/queue/source`);
const algo = require(`${process.cwd()}/src/algorithm/graph-acyclic/source`);

module.exports = {
  sort: function(g) {
    if (!algo.acyclic(g)) {
      return [];
    }

    q.reset();

    const seen = {};
    for (let v in g) {
      if (!seen[v]) {
        this._sort(g, parseInt(v), seen, q);
      }
    }

    return q.toArray();
  },

  _sort: function(g, v, seen, q) {
    seen[v] = true;

    for (let w of g[v]) {
      if (!seen[w]) {
        this._sort(g, w, seen, q);
      }
    }

    q.enqueue(v);
  }
};