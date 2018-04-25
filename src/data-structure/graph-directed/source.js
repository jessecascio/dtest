'use strict';

const q = require(`${process.cwd()}/src/data-structure/queue/source`);
let graph = {};

module.exports = {
  // o(1)
  addVertice: function(v) {
    if (this._contains(v)) {
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
  },

  // o(1)
  adjacent: function(v, w) {
    if (!graph[v] || !graph[w] || v === w) {
      return false;
    }

    return graph[v].has(w);
  },

  // o(n) - dont use dfs/bfs, see p.592
  connected: function(v, w) {
    if (!this._contains(v) || !this._contains(w)) {
      return false;
    }

    const es = this._bfs(v, w);
    return typeof es[w] !== "undefined";
  },

  // o(n)
  searchDepth: function(v, w) {
    if (!this._contains(v) || !this._contains(w)) {
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
    if (!this._contains(v) || !this._contains(w)) {
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

    while (!q.isEmpty()) {
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
    return Array.reverse(s);
  },

  // o(1)
  toString: function() {
    return JSON.stringify(graph);
  },

  /**
   * BONUS POINTS
   */

  // o(V) * o(E)
  reverse: function() {
    const r = {};

    for (let v in graph) {
      if (!r[v]) {
        r[v] = new Set();
      }

      for (let e of graph[v]) {
        if (!r[e]) {
          r[e] = new Set();
        }

        r[e].add(parseInt(v));
      }
    }

    graph = r;
  },

  // o(n)
  sort: function() {
    if (this.acylic().length) {
      return [];
    }

    const seen = {};
    q.reset();

    for (let v in graph) {
      if (!seen[v]) {
        this._sort(parseInt(v), seen, [], [], q);
      }
    }

    return q.toArray();
  },

  // o(n)
  _sort: function(v, seen, pre, post, q) {
    seen[v] = true;
    pre.push(v); 

    for (let e of graph[v]) {
      if (!seen[e]) {
        this._sort(e, seen, pre, post, q);
      }
    }

    post.push(v); 
    q.enqueue(v);
  },

  // o(n)
  acylic: function() {
    const ks = Object.keys(graph);

    let seen = {};
    let edges = {};
    let callStack = {};
    
    q.reset();

    for (let i=0; i<ks.length; i++) {
      if (!seen[ks[i]]) {
        this._acylic(ks[i], seen, callStack, edges, q);
      }
      if (!q.isEmpty()) {
        return q.toArray();
      }
    }

    return q.toArray();
  },

  // o(n)
  _acylic: function(v, sn, st, es, q) {
    st[v] = true;
    sn[v] = true;

    for (let e of graph[v]) {
      if (!q.isEmpty()) {
        return;
      }
      if (!sn[e]) {
        es[e] = v;
        this._acylic(e, sn, st, es, q);
      } else if (st[e]) {

        for (let i=v; i!=e; i=es[i]) {
          q.enqueue(i);
        }

        q.enqueue(e);
        q.enqueue(v);
      }
    }

    // current stack path is acylic
    st[v] = false; 
  },

  // o(n)
  girth: function() {
  
  },

  // o(n)
  getDegreeCount: function(v) {

  },

  // o(n) - use Kosaraju’s algo, p.584
  connectedStrong: function(v,w) {

  },

  // o(1)
  _contains: function(v) {
    return typeof graph[v] !== "undefined";
  },

  // o(1)
  _unique: function(v, w) {
    return v != w && this._contains(v) && this._contains(w);
  },

  // o(1)
  reset: function() {
    graph = {};
  }
};