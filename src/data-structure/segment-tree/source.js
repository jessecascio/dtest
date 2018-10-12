'use strict';

let tree = [];
let size = 0;

module.exports = {
  init: function(array) {
    tree = [];
    size = array.length - 1;
    this._init(array, tree, 0, size, 0); 
  },

  _init: function(array, tree, low, hi, i) {
    if (low === hi) {
      tree[i] = array[low];
      return;
    }

    const mid = Math.floor((low + hi)/2);

    this._init(array, tree, low, mid, 2*i+1);
    this._init(array, tree, mid+1, hi, 2*i+2);

    tree[i] = tree[2*i+1] + tree[2*i+2];
  },

  update: function(k, v) {
    
  },

  sum: function(i,j) {
    if (i > size || j < 0 || j < i) {
      return undefined;
    }

    return this._sum(i,j,0,size,0);
  },

  _sum: function(qlow, qhigh, low, high, cur) {
    if (qlow > high || qhigh < low) {
      return 0;
    }

    if (qlow <= low && qhigh >= high) {
      return tree[cur];
    }

    const mid = Math.floor((low + high) / 2);

    const p1 = this._sum(qlow, qhigh, low, mid, 2*cur+1);
    const p2 = this._sum(qlow, qhigh, mid+1, high, 2*cur+2);
    
    return p1 + p2;
  },
  
  toArray: function() {

  },

  reset: function() {
    tree = {}
  }
};