'use strict';

const q = require(`${process.cwd()}/src/data-structure/queue/source`);

module.exports = {
  sort: function(g) {
    if (this.hasCycle(g)) {
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
  },

  hasCycle: function(g) {
    const seen = {};
    const pathTo = {};
    const callStack = {};
    
    let cycle = false;
    for (let i in g) {
      if (!seen[i]) {
        cycle = this._hasCycle(g, i, seen, callStack, pathTo);
      }
      if (cycle) {
        return true;
      }
    }

    return false;
  },

  _hasCycle: function(g, v, seen, callStack, pathTo) {
    callStack[v] = true;
    seen[v] = true;

    for (let e of g[v]) {
      if (!seen[e]) {
        pathTo[e] = v;
        let cycle = this._hasCycle(g, e, seen, callStack, pathTo);
        if (cycle) {
          return true;
        }
      } else if (callStack[e]) {
        return true;
      }
    }

    callStack[v] = false; 
    return false;
  }
};