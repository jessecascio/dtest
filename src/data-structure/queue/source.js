'use strict';

const list = require(`${process.cwd()}/src/data-structure/linked-list-double/source`);

module.exports = {
  // o(1)
  enqueue: function(v) {
    list.addFirst(v);
  },

  // o(1)
  dequeue: function() {
    return list.getLast();
  },

  // o(1) 
  isEmpty: function() {
    return list.size() === 0;
  },

  // o(1)
  size: function() {
    return list.size();
  },

  // o(n)
  toArray: function() {
    return list.toArray();
  },

  // o(1)
  reset: function() {
    list.reset();
  }
};
