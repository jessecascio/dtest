'use strict';

const list = require(`${process.cwd()}/src/data-structure/linked-list/source`);

module.exports = {
  // o(1)
  enqueue: function(v) {
    list.addFirst(v);
  },

  // o(1) (double linked list)
  dequeue: function() {
    return list.getLast();
  },

  // o(1) (double linked list)
  peek: function() {
    return list.peekLast();
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
