'use strict';

const set = require(`${process.cwd()}/src/data-structure/disjointed-set/source`);
const pq = require(`${process.cwd()}/src/data-structure/binary-heap-max/source`);
pq._compare = function(i,j) {
  return i.w < j.w;
};

module.exports = {
  // o(elog(e))
  weight: function(g) {
    const o = this._kruskal(g);
    return o.weight;
  },

  // o(elog(e))
  mst: function(g) {
    const o = this._kruskal(g);
    return o.mst;
  },

  _kruskal: function(g) {
    const m = {};

    let i = 0;
    for (let v in g) {
      m[v] = i;
      i++;

      for (let k of g[v]) {
        const e = k[0];
        const w = k[1];
      
        if (typeof m[e] === "undefined") {
          pq.insert({ v, e, w })
        }
      }
    }

    set.init(i);

    let weight = 0;
    const mst = new Set();

    while (pq.size()) {
      const n = pq.remove();
      if (set.connected(m[n.v], m[n.e])) {
        continue;
      }

      set.union(m[n.v], m[n.e]);
      weight += n.w;

      mst.add(n.v.toString());
      mst.add(n.e.toString());
    }

    return { weight, mst: [...mst] };
  }
};
