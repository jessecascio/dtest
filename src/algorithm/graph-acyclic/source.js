'use strict';

const q = require(`${process.cwd()}/src/data-structure/queue/source`);

module.exports = {
  // o(n)
  acyclic: function(g) {
    const ks = Object.keys(g);

    let seen = {};
    let edges = {};
    let callStack = {};
    
    q.reset();

    for (let i=0; i<ks.length; i++) {
      if (!seen[ks[i]]) {
        this._acyclic(g, ks[i], seen, callStack, edges, q);
      }
      if (q.size() > 0) {
        return false;
      }
    }

    return !(q.size() > 0);
  },

  // o(n)
  _acyclic: function(g, v, sn, st, es, q) {
    st[v] = true;
    sn[v] = true;

    for (let e of g[v]) {
      if (q.size() > 0) {
        return;
      }
      if (!sn[e]) {
        es[e] = v;
        this._acyclic(g, e, sn, st, es, q);
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
};