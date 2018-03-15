/**
 * time test, verify efficiency
 */

const assert = require("chai").assert;
const chalk = require("chalk");

const util = require('./../../util.js');

const ds = require(util.input.s); // user data structure
const bn = require('./../../../src/data-structure/linked-list-singly/source.js'); // benchmark

describe("Singly Linked List - Time Tests", function() {
  this.timeout(60000);

  beforeEach(() => {
    ds.clear();
    bn.clear();
  });

  it ("addLast should be no more than 2x slower", function() {
    util.timer.start()
    for (let i=0; i<5000; i++) {
      ds.addLast(3)
    }
    const d1 = util.timer.stop();
    
    util.timer.start();
    for (let i=0; i<10000; i++) {
      bn.addLast(3)
    }
    const d2 = util.timer.stop();

    if (d2 !== 0 && d1 / d2 > 0) {
      assert.isAtMost(d1 / d2, 2);
    }
  });

  it ("addFirst should be no more than 2x slower", function() {
    util.timer.start()
    for (let i=0; i<10000; i++) {
      ds.addFirst(3)
    }
    const d1 = util.timer.stop();
    
    util.timer.start();
    for (let i=0; i<5000; i++) {
      bn.addFirst(3)
    }
    const d2 = util.timer.stop();
    
    if (d2 !== 0 && d1 / d2 > 0) {
      assert.isAtMost(d1 / d2, 2);
    }
  });
});
