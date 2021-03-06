'use strict';

const q = require(`${process.cwd()}/src/data-structure/queue/source`);
let graph = {};

module.exports = {
  // o(1)
  addVertice: function(v) {
    if (this.contains(v)) {
      return;
    }

    graph[v] = new Set();
  },

  // o(logE)
  addEdge: function(v, w) {
    if (!this._unique(v, w)) {
      return;
    }

    graph[v].add(w);
    graph[w].add(v);
  },

  // o(1)
  adjacent: function(v, w) {
    if (!graph[v] || !graph[w] || v === w) {
      return false;
    }

    return graph[v].has(w);
  },

  // o(n)
  connected: function(v, w) {
    if (!this.contains(v) || !this.contains(w)) {
      return false;
    }

    const es = this._bfs(v, w);
    return typeof es[w] !== "undefined";
  },

  // o(n)
  searchDepth: function(v, w) {
    if (!this.contains(v) || !this.contains(w)) {
      return [];
    }

    const es = this._dfs(v, w, {}, {});

    if (typeof es[w] === "undefined") {
      return [];
    }

    return this._pathTo(v, w, es);
  },

  // o(n)
  _dfs: function(v, w, es, s) {
    s[v] = true;
    for (let e of graph[v]) {
      if (!s[e]) {
        es[e] = v;

        if (e == w) {
          return es;
        }
        if (!es[w]) {
          this._dfs(e, w, es, s);
        }
      }
    }

    return es;
  },

  // o(n)
  searchBreadth: function(v, w) {
    if (!this.contains(v) || !this.contains(w)) {
      return [];
    }

    const es = this._bfs(v, w);

    if (typeof es[w] === "undefined") {
      return [];
    }

    return this._pathTo(v, w, es);
  },

  // o(n)
  _bfs: function(v, w) {
    q.reset();
    q.enqueue(v);

    const s = {};
    s[v] = true;

    const es = {};

    while (q.size() > 0) {
      const i = q.dequeue();

      for (let e of graph[i]) {
        if (!s[e]) {
          es[e] = i;

          if (e == w) {
            return es;
          }
          
          s[e] = true;
          q.enqueue(e);
        }
      }
    }

    return es;
  },

  // o(n)
  _pathTo: function(v, w, es){
    const s = [];
    
    for (let i=w; i != v; i=es[i]) {
      s.push(i);
    }

    s.push(v);
    return s.reverse();
  },

  // o(1)
  toString: function() {
    const g = {};

    for (let v in graph) {
      g[v] = [...graph[v]]
    }
    
    return JSON.stringify(g);
  },

  // o(1)
  reset: function() {
    graph = {};
    q.reset();
  },

  /**
   * BONUS POINTS
   */

  // o(n)
  components: function() {
    const ks = Object.keys(graph);

    if (ks.length <= 1) {
      return ks.length;
    }

    let count = 1;
    let sn = {};

    this._dfs(ks[0], null, {}, sn);

    for (let i=1; i<ks.length; i++) {
      if (!sn[ks[i]]) {
        count++;
        this._dfs(ks[i], null, {}, sn);
      }
    }

    return count;
  },

  // o(n)
  separation: function(v, w) {
    if (!this.contains(v) || !this.contains(w)) {
      return 0;
    }

    const es = this.searchBreadth(v, w);
    return es.length ? es.length - 1 : 0;
  },

  // o(n)
  acylic: function() {
    const ks = Object.keys(graph);
    const seen = {};

    let acylic = false;

    for (let i=0; i<ks.length; i++) {
      if (!seen[ks[i]]) {
        acylic = this._acylic(ks[i], ks[i], seen);

        if (acylic) {
          return true;
        }
      }
    }

    return false;
  },

  // o(n)
  _acylic: function(v, w, s) {
    s[v] = true;
    for (let e of graph[v]) {
      if (!s[e]) {
        if (this._acylic(e, v, s) === true) {
          return true;
        }
      } else if (e != w) {
        // if been to vertice but didnt come from it
        return true;
      }
    }

    return false;
  },

  // o(1)
  getDegreeCount: function(v) {
    if (!this.contains(v)) {
      return 0;
    }

    return graph[v].size;
  },

  // o(v)
  maxDegree: function() {
    let max = 0;

    for (let v in graph) {
      max = Math.max(max, graph[v].size);
    }

    return max;
  },

  // o(1)
  contains: function(v) {
    return typeof graph[v] !== "undefined";
  },

  // o(1)
  _unique: function(v, w) {
    return v != w && this.contains(v) && this.contains(w);
  }
};