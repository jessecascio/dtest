'use strict';

module.exports = {
  acyclic: function(g) {
    const seen = {};
    const pathTo = {};
    const callStack = {};
    
    let cycle = false;
    for (let i in g) {
      if (!seen[i]) {
        cycle = this._acyclic(g, i, seen, callStack, pathTo);
      }
      if (cycle) {
        return true;
      }
    }

    return false;
  },

  _acyclic: function(g, v, seen, callStack, pathTo) {
    callStack[v] = true;
    seen[v] = true;

    for (let e of g[v]) {
      if (!seen[e]) {
        pathTo[e] = v;
        let cycle = this._acyclic(g, e, seen, callStack, pathTo);
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