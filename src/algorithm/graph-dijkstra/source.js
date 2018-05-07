'use strict';

const crypto = require('crypto');
const q = require(`${process.cwd()}/src/data-structure/queue/source`);
const pq = require(`${process.cwd()}/src/data-structure/binary-heap-max/source`);
pq._compare = function(i,j) {
  return i.w < j.w;
};

let paths = {};
let lock, graph;

module.exports = {
  // o(e logv)
  distTo: function(g,s,t) {
    this._setGraph(g);
    if (!graph[s] || !graph[t]) {
      return -1;
    }
    if (!paths[s]) {
      this._buildPaths(s);
    }

    return paths[s][t] ? paths[s][t].w : -1;
  },

  // o(e logv)
  pathTo: function(g,s,t) {
    this._setGraph(g);
    if (!graph[s] || !graph[t]) {
      return [];
    }
    if (!paths[s]) {
      this._buildPaths(s);
    }

    q.reset();
    let i = t;
    while (paths[s][i].p) {
      q.enqueue(i);
      i = paths[s][i].p;
    }
    q.enqueue(s);

    return q.toArray();
  },

  _buildPaths: function(s) {
    paths[s] = {};
    paths[s][s] = { w:0 };

    pq.reset();
    pq.insert({v:s,w:0});

    const seen = {};
    while (pq.size()) {
      const p = pq.remove();
      if (seen[p.v]) {
        continue;
      }

      seen[p.v] = true;

      for (let e of graph[p.v]) {
        const v = e[0];
        const w = e[1];

        if (!paths[s][v]) {
          paths[s][v] = {};
          paths[s][v].w = -1;
        }
        if (paths[s][v].w === -1 || paths[s][v].w > w + paths[s][p.v].w) {
          paths[s][v].w = w + paths[s][p.v].w;
          paths[s][v].p = p.v;
        }

        if (seen[v]) {
          continue;
        }

        pq.insert({v,w:paths[s][v].w});
      }
    }
  },

  _setGraph: function(g) {
    // allow graph reuse on subsequent calls
    const md5 = crypto.createHash('md5').update(JSON.stringify(g)).digest('hex');
    if (typeof lock === "undefined" || lock !== md5) {
      lock = md5;
      paths = {};
    }

    graph = g;
  }
};
