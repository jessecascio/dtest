'use strict';

module.exports = {
  _queue: require(`${process.cwd()}/src/data-structure/queue/source`),
  _graph: null,

  // o(n)
  search: function(g, v, w) {
    if (typeof g[v] === "undefined" || typeof g[w] === "undefined") {
      return [];
    }

    this._graph = g;
    const es = this._bfs(v, w);

    if (typeof es[w] === "undefined") {
      return [];
    }

    return this._pathTo(v, w, es);
  },

  // o(n)
  _bfs: function(v, w) {
    this._queue.reset();
    this._queue.enqueue(v);

    const s = {};
    s[v] = true;

    const es = {};

    while (this._queue.size() > 0) {
      const i = this._queue.dequeue();

      for (let e of this._graph[i]) {
        if (!s[e]) {
          es[e] = i;

          if (e == w) {
            return es;
          }
          
          s[e] = true;
          this._queue.enqueue(e);
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
};
