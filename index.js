const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');
const joi = require('joi');
const chalk = require('chalk');

const util = require('./src/test/util.js');

// validate inputs
if (!util.input.s || !util.input.t) {
  console.log("ERROR: Both source (-s) and test (-t) are required");
  process.exit();
}
if (!fs.existsSync(util.input.s)) {
  console.log(`FAILED to load source: ${util.input.f}`);
  process.exit();
}
if (!fs.existsSync(util.input.t)) {
  console.log(`FAILED to find test dir: ${util.input.t}`);
  process.exit();
}

// get test dir
const dir = `${__dirname}/${util.input.t}`;

// verify test files
if (!fs.existsSync(`${dir}/contract.js`)) {
  console.log(`FAILED to find contract.js: ${dir}/contract.js`);
  process.exit();
}
if (!fs.existsSync(`${dir}/unit.js`)) {
  console.log(`FAILED to find unit.js: ${dir}/unit.js`);
  process.exit();
}

// 2) ensure unit tests pass
function runUnitTests() {
  const mocha = new Mocha();
  mocha.addFile(
    path.join(dir, 'unit.js')
  );

  return new Promise((resolve, reject) => {
    try {
      mocha.run(failures => {
        return failures ? reject(failures) : resolve();
      });
    } catch (e) {
      return reject(e);
    }
  });
}

// 3) ensure optional data tests pass
function runDataTests() {
  /** optional */
  if (!fs.existsSync(`${dir}/data.js`)) {
    return Promise.resolve();
  }

  const mocha = new Mocha();
  mocha.addFile(
    path.join(dir, 'data.js')
  );

  return new Promise((resolve, reject) => {
    try {
      mocha.run(failures => {
        return failures ? reject(failures) : resolve();
      });
    } catch (e) {
      return reject(e);
    }
  });
}

// 4) ensure remaining tests pass
function runOtherTests() {
  const mocha = new Mocha();
  
  let run = false;

  fs.readdirSync(dir).filter((file) => {
    return file.substr(-3) === '.js';
  }).forEach(function(file){
    if (file === 'contract.js' || file === 'unit.js' || file === 'data.js') {
      return;
    }
    
    run = true;

    mocha.addFile(
      path.join(dir, file)
    );
  });

  if (!run) {
    return Promise.resolve();
  }
  
  return new Promise((resolve, reject) => {
    try {
      mocha.run(failures => {
        return failures ? reject(failures) : resolve();
      });
    } catch (e) {
      return reject(e);
    }
  });
}

// do work
(async () => {
  try {
    await runUnitTests();
    
    // 1) ensure contract is met
    const contract = require(`${dir}/contract.js`);
    const source = require(util.input.s);

    const r = joi.validate(source, contract.schema);
    if (r.error) {
      console.log(chalk.red("HOLDING FOR IMPLEMENTATION: ", r.error.details[0].message, "\n"));
      process.exit();
    }

    await runDataTests();
    await runOtherTests();
  } catch (e) {
    // console.log("FAIL", e);
  }
 })();
