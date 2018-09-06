'use strict';

const pq = require(`${process.cwd()}/src/data-structure/binary-heap-max/source`);
pq._compare = function(i,j) {
  return i.w < j.w;
};

let graph;

module.exports = {
  // o(elog(e))
  weight: function(g) {
    const o = this._prim(g);
    return o.weight;
  },

  // o(elog(e))
  mst: function(g) {
    const o = this._prim(g);
    return o.path;
  },

  _prim: function(g) {
    graph = g;

    const sn = {};
    const path = [];

    let k;
    for (k in graph) {
      sn[k] = false;
    }

    pq.reset();
    pq.insert({v:k,w:0});

    let weight = 0;
    while (pq.size()) {
      const n = pq.remove();

      if (sn[n.v]) {
        continue;
      }

      sn[n.v] = true;
      path.push(n.v.toString());

      for (let e of graph[n.v]) {
        if (!sn[e[0]]) {
          pq.insert({v:e[0], w:e[1]});
        }
      }

      weight += n.w;
    }

    return { weight, path };
  }
};
