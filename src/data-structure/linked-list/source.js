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

  // o(n) (o(1) w/ doubly linked list)
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

  // o(n) (o(1) w/ doubly linked list)
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

  // o(1)
  peekFirst: function() {
    return head ? head.data : undefined;
  },

  // o(n) (o(1) w/ tail)
  peekLast: function() {
    if (!head) {
      return;
    }

    let n = head;
    while (n.next) {
      n = n.next;
    }

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

  // o(1)
  reset: function() {
    head = undefined;
    node_count = 0;
  },

  /**
   * BONUS POINTS
   */

  // o(n)
  middle: function() {
    if (this.size() === 0) {
      return;
    }

    const m = this._mid(head);
    return m.data;
  },

  _mid: function(l) {
    let p1 = l;
    let p2 = l;

    while (p2 && p2.next) {
      p1 = p1.next;
      p2 = p2.next.next;
    }

    return p1;
  },

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

  // o(nlogn)
  sort: function() {
    if (this.size() === 0) {
      return;
    }

    head = this._sort(head);
  },

  _sort: function(l) {
    if (!l.next) {
      return l;
    }

    const {l1, l2} = this._split(l);

    const s1 = this._sort(l1);
    const s2 = this._sort(l2);

    return this._merge(s1, s2);
  },

  // split a list
  _split: function(l) {
    let m = this._mid(l);

    let l1 = l;
    let l2 = m;

    let n = l;
    
    while(n && n.next !== l2) {
      n = n.next;
    }
    n.next = undefined;

    return {l1, l2};
  },

  // merge a list
  _merge: function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    if(l1.data < l2.data) {
      l1.next = this._merge(l1.next, l2);
      return l1;
    } else {
      l2.next = this._merge(l2.next, l1);
      return l2;
    }
  },

  // o(n)
  dedupe: function() {
    if (this.size() <= 1) {
      return;
    }

    const m = {};
    let n = head;
    m[n.data] = true;

    let i = 0;
    n = n.next;

    while (n) {
      i++;

      if (!m[n.data]) {
        m[n.data] = true;
      } else {
        this.get(i);
        i--;
      }

      n = n.next;
    }
  },

  // o(n)
  rotate: function(k) {
    if (!k || k >= this.size() || k <= 0) {
      return;
    }
    
    const s = this.size() - k;
    let i=1;

    let node = head;
    while (i < s) {
      i++;
      node = node.next;
    }

    let newHead = node.next;
    node.next = undefined;

    let half = head;
    head = newHead;

    node = newHead;
    while (node.next) {
      node = node.next;
    }

    node.next = half;
  },

  // o(n)
  swap: function(i,j) {
    if (j<=i || j > this.size() || j <= 0) {
      return;
    }
    if (i>=j || i < 0) {
      return;
    }

    let jd = this.get(j);
    let id = this.get(i);

    this.add(i, jd);
    this.add(j, id);
  },

  // o(n)
  purge: function(i) {
    if (this.size() === 0) {
      return;
    }

    let n = head;
    let p;
    let h; // new head

    while (n) {
      if (n.data !== i) {
        if (!h) {
          h = n;
        }

        p = n;
      } else {
        if (p) {
          p.next = n.next;
        } 
      }

      n = n.next;
    }

    if (h) {
      head = h;
    } else if (!p) {
      head = undefined;
    }
  },

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
