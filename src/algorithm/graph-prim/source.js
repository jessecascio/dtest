'use strict';

const pq = require(`${process.cwd()}/src/data-structure/binary-heap-max/source`);
pq._compare = function(i,j) {
  return i.w < j.w;
};

let graph;

module.exports = {
  size: function(g) {
    const o = this._prim(g);
    return o.size;
  },

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

    let size = 0;
    while (pq.size()) {
      size += this._pathTo(path, pq, sn);
    }

    return { size, path };
  },

  _pathTo: function(path, pq, sn) {
    const n = pq.remove();

    if (sn[n.v]) {
      return 0;
    }

    sn[n.v] = true;
    path.push(n.v.toString());

    for (let e of graph[n.v]) {
      if (!sn[e[0]]) {
        pq.insert({v:e[0], w:e[1]});
      }
    }

    return n.w;
  }
};
