'use strict';

const node = {
  data: undefined,
  next: undefined
};

let node_count = 0;
let head;

module.exports = {
  // o(n)
  add: function(i, v) {
    if (i > node_count || i < 0) {
      return false;
    }

    node_count++;

    let j = 0;
    let n = head;
    let p;

    while (j !== i) {
      j++;
      p = n;
      n = n.next;
    }

    const d = {};
    d.data = v;
    d.next = n;

    if (p) {
      p.next = d;
    } else {
      head = d;
    }
    
    return true;
  },

  // o(1)
  addFirst: function (v) {
    node_count++;

    const h = head;

    const n = {};
    n.data = v;
    n.next = h;

    head = n;
  },

  // o(n)
  addLast: function(v) {
    node_count++;

    const n = {};
    n.data = v;
    n.next = undefined;

    if (!head) {
      head = n;
      return;
    }

    let l = head;
    while (l.next) {
      l = l.next;
    }

    l.next = n;
  },

  // o(n)
  get: function(i) {
    if (i >= this.size() || i < 0 || !head) {
      return;
    }
    if (i === 0) {
      return this.getFirst();
    }
    if (i === this.size() - 1) {
      return this.getLast();
    }

    node_count--;

    let n = head.next;
    let p = head;

    for (let j=2; j<=i; j++) {
      p = n;
      n = n.next;
    }

    p.next = n.next;

    return n.data;
  },

  // o(1)
  getFirst: function() {
    if (!head) {
      return;
    }

    const n = head;
    head = n.next;

    node_count--;

    return n.data;
  },

  // o(n)
  getLast: function() {
    if (!head) {
      return;
    }
    if (!head.next) {
      return this.getFirst();
    }

    node_count--;

    let p = head;
    let n = head.next;

    while (n.next) {
      p = n;
      n = n.next;
    }

    p.next = undefined;

    return n.data;
  },

  // o(n)
  indexOf: function(v) {
    let i = 0;
    let n = head;

    while (n) {
      if (n.data === v) {
        return i;
      }

      i++;
      n = n.next;
    }

    return undefined;
  },

  // o(n)
  lastIndexOf: function(v) {
    let i = 0;
    let p = undefined;
    let n = head;

    while (n) {
      if (n.data === v) {
        p = i;
      }

      i++;
      n = n.next;
    }

    return p;
  },

  // o(n)
  contains: function(v) {
    const i = this.indexOf(v);
    return typeof i !== "undefined";
  },

  // o(n)
  count: function(v) {
    let c = 0;
    let n = head;

    while (n) {
      if (n.data === v) {
        c++;
      }

      n = n.next;
    }

    return c;
  },

  // o(1)
  size: function() {
    return node_count;
  },

  // o(n)
  toArray: function() {
    let n = head;
    const a = [];

    while (n) {
      a.push(n.data);
      n = n.next;
    }

    return a;
  },

  /**
   * BONUS POINTS
   */

  // o(n)
  reverse: function() {
    if (this.size() <= 1) {
      return;
    }

    let prev = head;
    let node = head.next;
    head.next = undefined;

    while (node) {
      let temp = node.next;
      node.next = prev;

      prev = node;
      node = temp;
    }

    head = prev;
  },

  // o(n)
  reversePartial: function(i, j) {
    if (this.size() <= 1) {
      return;
    }
    if (i < 0 || j > this.size() - 1 || i >= j) {
      return;
    }

    let newHead;
    let prev = head;
    let node = head.next;

    let k = 0;

    while (k < i) {
      newHead = prev;
      prev = node;
      node = node.next;
      k++;
    }

    let newTail = prev;

    while (k < j) {
      let tmp = node.next;
      node.next = prev;

      prev = node;
      node = tmp;
      k++;
    }
    
    if (newHead) {
      newHead.next = prev;
    } else {
      head = prev;
    }
    
    newTail.next = node;
  },

  // o(n)
  middle: function() {
    if (this.size() === 0) {
      return;
    }

    let p1 = head;
    let p2 = head;

    while (p2 && p2.next) {
      p1 = p1.next;
      p2 = p2.next.next;
    }

    return p1.data;
  },

  // o(nlogn)
  // sort: function() { },

  // o(n)
  isPalidrome: function() {
    if (this.size() <= 1) {
      return true;
    }
    
    let i = Math.floor(this.size()/2);
    this.reversePartial(0, i-1);

    let mp = head; // middle pointer
    let fp = head; // fast pointer

    while (fp && fp.next) {
      mp = mp.next;
      fp = fp.next.next;
    }

    if (this.size()%2 !== 0) {
      mp = mp.next;
    }

    fp = head; // first pointer

    let pali = true;
    while (fp && mp) {
      if (fp.data !== mp.data) {
        pali = false;
        fp = mp = null;
      } else {
        fp = fp.next;
        mp = mp.next;
      }
    }

    this.reversePartial(0, i-1);
    return pali;
  }
};
