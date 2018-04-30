'use strict';

const q = require(`${process.cwd()}/src/data-structure/queue/source`);

module.exports = {
  // o (v+e)
  components: function(g) {
    const vs = this._reversePostOrder(g);
    g = this._reverse(g);
    
    let components = 0;
    const seen = {};

    for (let v in g) {
      if (!seen[v]) {
        components++;
        this._dfs(g, v, seen);
      }
    }

    return components;
  },

  _dfs: function(g,i,sn) {
    sn[i] = true;

    for (let j of g[i]) {
      if (!sn[j]) {
        this._dfs(g,j,sn);
      }
    }
  },

  _reversePostOrder(g) {
    const sn = {};
    const vs = [];

    for (let i in g) {
      if (!sn[i]) {
        this._rpo(g,i,vs,sn);
      }
    }

    return vs.reverse();
  },

  _rpo: function(g,i,vs,sn) {
    sn[i] = true;

    for (let j in g[i]) {
      if (!sn[j]) {
        this._rpo(g,j,vs,sn);
      }
    }

    vs.push(i);
  },

  _reverse: function(g) {
    const gtmp = {};

    for (let i in g) {
      if (!gtmp[i]) {
        gtmp[i] = [];
      }

      for (let j of g[i]) {
        if (!gtmp[j]) {
          gtmp[j] = [];
        }

        gtmp[j].push(i);
      }
    }

    return gtmp;
  }
};