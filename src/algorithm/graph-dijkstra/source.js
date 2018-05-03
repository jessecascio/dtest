'use strict';

const crypto = require('crypto');
const q = require(`${process.cwd()}/src/data-structure/binary-heap-max/source`);
q._compare = function(i,j) {
  return i.w < j.w;
};

let paths = {};
let lock, graph;

module.exports = {
  // o(e logv)
  pathTo: function(g,s,t) {
    const md5 = crypto.createHash('md5').update(JSON.stringify(g)).digest('hex');
    if (typeof lock === "undefined" || lock !== md5) {
      lock = md5;
      paths = {};
    }

    graph = g;

    if (!graph[s] || !graph[t]) {
      return -1;
    }

    if (!paths[s]) {
      paths[s] = {};
      paths[s][s] = { w:0 };

      q.reset();
      q.insert({v:s,w:0});

      const seen = {};
      while (q.size()) {
        this._pathTo(s, q, seen);
      }
    }

    return paths[s][t] ? paths[s][t].w : -1;
  },
  
  _pathTo: function(s, q, sn) {
    const p = q.remove();
    if (sn[p.v]) {
      return;
    }

    sn[p.v] = true;

    for (let e of graph[p.v]) {
      const v = e[0];
      const w = e[1];

      if (!paths[s][v]) {
        paths[s][v] = {};
        paths[s][v].w = w + paths[s][p.v].w;
        paths[s][v].p = p.v;
      } else if (paths[s][v].w > w + paths[s][p.v].w) {
        paths[s][v].w = w + paths[s][p.v].w;
        paths[s][v].p = p.v;
      }

      if (sn[v]) {
        continue;
      }

      q.insert({v,w:paths[s][v].w});
    }
  }
};
