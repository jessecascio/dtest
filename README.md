# dtest

NodeJS Data Structure and Algorithm Testing Framework

### Why dtest?

The purpose of `dtest` is to help with the implementation details for common data structures and algorithms, with the goal of helping to better understand the internal intricacies.  By offering pre-defined test cases, as well as random inputs, the user can know that their implementations are handling all edge cases.  While there are plenty of online resources for practicing coding challenges, there are few for testing a full implementation of a data structure.

While it is easy to “spoof” the tests by not actually implementing the correct algorithm, I encourage you to try and get your runtime complexities to match, even though that piece is not actually tested.

`dtest` was written in NodeJS because JavaScript is a very easy language to pick up and to read, and does not offer many native data structure implementations.  This allows the user to focus on the coding vs. the language and environment.

### Project Structure

All of the available data structures and algorithms can be found in the `src/` directory.  Each directory has three files:

1. `README.md` - The readme goes over the data structure / algorithm, along with implementation details, pros/cons, alternatives, and use cases.  It is advised that the implementation details are not read until after implementation to aid in the learning process.

2. `template.js` - This file outlines the API for the data structure / algorithm.  When implementing, the functions will need to be implemented so that they can be tested.

3. `source.js` - This file contains the implementation which is used to test your implementation against.  It can be useful if you are stuck on a particular implementation as well as to check if your runtime complexities are correct.

The `test/` directory is where the pre-defined tests are that are used to test your implementation.  The directory structure mirrors that of the `src/` directory.  Each directory has three files:

1. `contract.js` - This is a validator to ensure that all of the functions have been implemented prior to running the data validation tests.
2. `unit.js` - This contains predefined unit tests for testing the implementation.
3. `data.js` - This runs a bunch of random tests comparing your implementation to the benchmark (source.js)

There is also a `lib/` directory which can be used to place implementations.  Your implementation can be placed anywhere, but `lib/` offers a centralized location for all of your implementations and is ignored by source control.  There is also a file:

1. `.debug` - A template of the output from the random data testing when there is a mismatch between your implementation the benchmark

## Running

### Installation

To run `dtest` you will need to have both the `node` cli as well as `npm`.

[nvm](https://github.com/creationix/nvm) is a great tool for managing node versions.

Next, clone the repo for access to the `dtest` cli:

```
git clone git@github.com:jessecascio/dtest.git
```

And install dependencies:

```
npm install
```

All commands should be ran from inside of the `dtest` directory.

### Implementing

First determine which data structure or algorithm you would like to implement.  The currently available choices can be found in the `src/` directory.  For example, if I wanted to implement a `linked-list`, copy the `template.js` file of the data structure and place it into `lib/` with an appropriate name:

`cp src/data-structure/linked-list/template.js lib/list.js`

Next implement the functions.  Be advised that there is a suggested implementation order due to test dependencies as outlined in the next section.

### Testing

First run the test suite against the freshly copied template file:

`npm run dtest -- -s lib/list.js -t test/data-structure/linked-list`

where the `-s` option is the path to your implementation and the `-t` option points to the testing suite.

You will notice that all of the unit testing are pending, as they are skipped until they have been implemented.  If you look at the output you will notice the following test name syntax:

`#1) addFirst() -> [ toArray() ]`

Due to inter dependencies on the function it is recommended (but not required) that you implement the functions in order, as defined by `#1`.  The second part of the name, `addFirst()`, is the function that is being tested.  And lastly, `[ toArray() ]`, shows the prerequisite functions that need to be implemented prior to the tests being ran.

For example:

`#3) size() -> [ addLast(), getLast(), addFirst(),  getFirst() ]`

We see that the `size()` function depends on four other functions, and will not be tested until they have been implemented.  It is also suggested that you implement it third, but ultimately any function can be implemented in any order.

Also, at the bottom of the output there will be a message similar to:

```
HOLDING FOR IMPLEMENTATION:  "add" must be a Function
```

This is the testing suite holding off on running the random data tests until all of the functions, as defined in the `contract.js` file, are implemented.

There also may be optional tests as outlined with the `OPTIONAL:` prefix.  These tests are not required to be completed prior to running the data tests, but if they are filled out they will be validated against unit tests.  These typically include functionality that are not central to the data structure but are common use cases when working with the data structure.  You can usually build on the functionality of the optional functions i.e. completing two will help with the third, so be sure to evaluate them all to determine the best strategy for implementation.

After you have implemented all the functions and they are passing the unit tests they will be run against the benchmark (source.js) and tested with random data inputs.  If there is a mismatch in data or behaviour between your implementation and the benchmark, a `*.debug` file will be placed into the `lib/` directory, mirroring the same name as your source file.  There is a sample debug file in `lib/.debug` which demonstrates the structure of the debug outputs.