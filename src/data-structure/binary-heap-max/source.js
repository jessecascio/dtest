'use strict';

// reserve 0 index for math on keys i.e. 2 * i
let heap = [null];
let size = 0;

module.exports = {
  // o(logN)
  insert: function(i) {
    size++;
    heap[size] = i;
    this._swim(size);
  },

  // o(logN)
  _swim: function(i) {
    let p = Math.floor(i/2);
    while (i > 1 && this._compare(heap[i], heap[p])) {
      this._swap(i, p);
      i = p;
      p = Math.floor(i/2);
    }
  },

  // o(logN)
  remove: function() {
    if (this.isEmpty()) {
      return;
    }

    const max = heap[1];
    this._swap(1, size);
    heap[size] = null;

    this._sink(1);

    size--;
    return max;
  },

  // o(logN)
  _sink: function(i) {
    while (2*i <= size) {
      let c = 2*i;
      if (heap[2*i+1] && heap[2*i] < heap[2*i+1]) {
        c++;
      } 
      
      if (this._compare(heap[i], heap[c])) {
        return;
      }
  
      this._swap(i, c);
      i = c;
    }
  },

  // o(1)
  peek: function() {
    return heap[1];
  },

  // o(1)
  _swap: function(i, j) {
    const t = heap[i];
    heap[i] = heap[j];
    heap[j] = t;
  },

  // o(1)
  _compare: function(i, j) {
    return i > j;
  },

  // o(1)
  reset: function() {
    heap = [null];
    size = 0;
  },

  // o(1)
  toArray: function() {
    return heap;
  },

  // o(1)
  size: function() {
    return size;
  },

  // o(1)
  isEmpty: function() {
    return size === 0;
  }
};