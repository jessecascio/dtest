'use strict';

let data;
let size; // number of sets

module.exports = {
  // o(n)
  init: function(i) {
    size = i;
    data = [...Array(size).keys()];
  },

  // o(n)
  union: function(p, q) {
    let rootP = this._root(p);
    let rootQ = this._root(q);

    if (rootP === rootQ) {
      return;
    }

    // pick arbitrary root
    data[rootP] = rootQ;
    size--;
  },

  // o(n)
  _root: function(x) {
    // get root for a value
    while (x !== data[x]) {
      x = data[x];
    }

    return x;
  },

  // o(n)
  connected: function (p, q) {
    return this._root(p) === this._root(q);
  },

  // o(1)
  size: function() {
    return size;
  },

  // o(1)
  toArray() {
    return data;
  },

  /**
   * BONUS POINTS
   */

   // o(n)
  sets: function() {
    const vals = {}; // vals to roots
    for (let i=0; i<data.length; i++) {
      if (typeof vals[i] === "undefined") {
        vals[i] = this._dfs(vals, i);
      }
    }

    const sts = {}; // sets
    for (let v in vals) {
      const k = vals[v];
      if (!sts[k]) {
        sts[k] = new Set();
      }

      sts[k].add(parseInt(v));
    }

    const gs = [];
    for (let k in sts) {
      gs.push([...sts[k]]);
    }

    return gs;
  },

  _dfs: function(v,i) {
    const vd = []; // visited

    while (data[i] !== i && typeof v[i] === "undefined") {
      i = data[i];

      if (typeof v[i] !== "undefined") {
        i = v[i];
      } else {
        vd.push(i);
      }
    }
    
    for (let j of vd) {
      v[j] = i;
    }

    return i;
  }
};
