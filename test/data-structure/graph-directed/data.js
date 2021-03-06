/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/graph-directed/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/data-structure/graph-directed/source.js';
let bn = require(bnPath); // benchmark

describe ("Directed Graph - Data Tests", function() {
  this.timeout(60000);

  it ("graph should handle random inputs", function() {
    const N = 30;

    for (let i=0; i<200; i++) {
      reset();

      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 3);
        
        const v = Math.floor(Math.random() * (2 * N));
        const w = Math.floor(Math.random() * (2 * N));

        ds.addVertice(v);
        ds.addVertice(w);
        bn.addVertice(v);
        bn.addVertice(w);

        switch (c) {
          case 0:
            ds.addEdge(v, w);
            bn.addEdge(v, w);
            break;
        }
      }

      for (let j=0; j<(N*4); j++) {
        const c = Math.floor(Math.random() * 5);

        const v = Math.floor(Math.random() * (2 * N));
        const w = Math.floor(Math.random() * (2 * N));

        testAdjacent(v,w);

        switch (c) {
          case 0:
            testSearchDepth(v,w);
            if (ds.preOrder) {
              testPreOrder(v);
            }
            break;
          case 1:
            testSearchBreadth(v,w);
            if (ds.postOrder) {
              testPostOrder(v);
            }
            break;
          case 2:
            if (ds.strongComponents) {
              testStrongComponents();
            }
            break;
          default:
            testConnected(v,w);
            if (ds.topoOrder && ds.acyclic) {
              testTopoOrder(v);
            }
        }

        /**
         * OPTIONAL tests
        */
        if (ds.acyclic) {
          testAcyclic(v,w);
        }
        
      }
    }
  });
});

function fail(o) {
  const p = util.output.write(o);
  expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
}

function reset() {
  decache(dsPath);
  ds = require(dsPath);

  bn.reset();
}

function testPreOrder(v) {
  const a = ds.preOrder();
  const b = bn.preOrder();
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    const o = {
      error: 'Data structure and benchmark preOrder do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'preOrder',
        bn: a,
        ds: b
      }
    }

    fail(o);
  }
}

function testPostOrder(v) {
  const a = ds.postOrder();
  const b = bn.postOrder();
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    const o = {
      error: 'Data structure and benchmark postOrder do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'postOrder',
        bn: a,
        ds: b
      }
    }

    fail(o);
  }
}

function testTopoSort(v) {
  const a = ds.topoSort();
  const b = bn.topoSort();
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    const o = {
      error: 'Data structure and benchmark topoSort do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'topoSort',
        bn: a,
        ds: b
      }
    }

    fail(o);
  }
}

function testAdjacent(v,w) {
  if (ds.adjacent(v,w) !== bn.adjacent(v,w)) {
    const o = {
      error: 'Data structure and benchmark adjacent do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'adjacent',
        ps: [v,w],
        bn: bn.adjacent(v,w),
        ds: ds.adjacent(v,w)
      }
    }

    fail(o);
  }
}

function testAcyclic(v,w) {
  if (ds.acyclic(v,w) !== bn.acyclic(v,w)) {
    const o = {
      error: 'Data structure and benchmark acyclic do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'acyclic',
        ps: [v,w],
        bn: bn.acyclic(v,w),
        ds: ds.acyclic(v,w)
      }
    }

    fail(o);
  }
}

function testConnected(v,w) {
  if (ds.connected(v,w) !== bn.connected(v,w)) {
    const o = {
      error: 'Data structure and benchmark connected do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'connected',
        ps: [v,w],
        bn: bn.connected(v,w),
        ds: ds.connected(v,w)
      }
    }

    fail(o);
  }
}

function testSearchDepth(v,w) {
  const dsl = ds.searchDepth(v,w).length;
  const bsl = ds.searchDepth(v,w).length;

  if ((dsl === 0 && bsl > 0) || (dsl > 0 && bsl === 0)) {
    const o = {
      error: 'Data structure and benchmark searchDepth do not return the same values',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'searchDepth',
        ps: [v,w],
        bn: bn.searchDepth(v,w),
        ds: ds.searchDepth(v,w)
      }
    }

    fail(o);
  }
}

function testSearchBreadth(v,w) {
  const dsl = ds.searchBreadth(v,w).length;
  const bsl = ds.searchBreadth(v,w).length;

  if ((dsl === 0 && bsl > 0) || (dsl > 0 && bsl === 0)) {
    const o = {
      error: 'Data structure and benchmark searchBreadth do not return the same values',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'searchBreadth',
        ps: [v,w],
        bn: bn.searchBreadth(v,w),
        ds: ds.searchBreadth(v,w)
      }
    }

    fail(o);
  }
}

function testStrongComponents() {
  if (ds.strongComponents() !== bn.strongComponents()) {
    const o = {
      error: 'Data structure and benchmark strongComponents do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'strongComponents',
        bn: bn.strongComponents(),
        ds: ds.strongComponents()
      }
    }

    fail(o);
  }
}