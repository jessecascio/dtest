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

describe.skip ("Directed Graph - Data Tests", function() {
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
        const c = Math.floor(Math.random() * 4);

        const v = Math.floor(Math.random() * (2 * N));
        const w = Math.floor(Math.random() * (2 * N));

        testAdjacent(v,w);

        switch (c) {
          case 0:
            testSearchDepth(v,w);
            break;
          case 1:
            testSearchBreadth(v,w);
            break;
          default:
            testConnected(v,w);
        }

        /**
         * OPTIONAL tests
        */
        if (ds.separation) {
          testSeparation(v,w);
        }
        if (ds.acylic) {
          testAcylic(v,w);
        }
        if (ds.components) {
          testComponents(v,w);
        }
        if (ds.getDegreeCount) {
          testDegreeCount(v);
          testDegreeCount(w);
        }
        if (ds.maxDegree) {
          testMaxDegreeCount();
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

function testDegreeCount(v) {
  if (ds.getDegreeCount(v) !== bn.getDegreeCount(v)) {
    const o = {
      error: 'Data structure and benchmark getDegreeCount do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'getDegreeCount',
        ps: [v],
        bn: bn.getDegreeCount(v),
        ds: ds.getDegreeCount(v)
      }
    }

    fail(o);
  }
}

function testMaxDegreeCount() {
  if (ds.maxDegree() !== bn.maxDegree()) {
    const o = {
      error: 'Data structure and benchmark maxDegree do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'maxDegree',
        bn: bn.maxDegree(),
        ds: ds.maxDegree()
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

function testComponents(v,w) {
  if (ds.components() !== bn.components()) {
    const o = {
      error: 'Data structure and benchmark components do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'components',
        bn: bn.components(),
        ds: ds.components()
      }
    }

    fail(o);
  }
}

function testSeparation(v,w) {
  if (ds.separation(v,w) !== bn.separation(v,w)) {
    const o = {
      error: 'Data structure and benchmark separation do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'separation',
        ps: [v,w],
        bn: bn.separation(v,w),
        ds: ds.separation(v,w)
      }
    }

    fail(o);
  }
}

function testAcylic(v,w) {
  if (ds.acylic(v,w) !== bn.acylic(v,w)) {
    const o = {
      error: 'Data structure and benchmark acylic do not return the same value',
      pre: {
        bn: bn.toString(),
        ds: ds.toString()
      },
      assert: {
        fn: 'acylic',
        ps: [v,w],
        bn: bn.acylic(v,w),
        ds: ds.acylic(v,w)
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