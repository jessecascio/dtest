# dtest

NodeJS Data Structure and Algorithm Testing Framework

### Why dtest?

The purpose of `dtest` is to help with the implementation details for common data structures and algorithms, with the goal of helping to better understand the internal intracacies.  By offering pre-defined test cases, as well as random inputs, the user can know that their implementations are handling all edge cases.  While there are plenty of online resources for practing coding challenges, there are few for testing a full implementation of a data structure.

`dtest` was written in NodeJS because JavaScript is a very easy language to pick up and read, and does not offer many data structure implementations.  This allows the user to focus on the coding vs. the language or environment.

### Installation

To run `dtest` you will need to have both the `node` cli as well as `npm`.

[https://github.com/creationix/nvm](nvm) is a great tool for managing node versions.

Clone the repo for access to the `dtest` cli.

```
git clone git@github.com:jessecascio/dtest.git
```

All commands should be ran from inside of the `dtest` directory.

### Project Structure



### Running

First determine which data structure or algorithm you would like to implement.  The currently available choices can be found in the `src/` directory.  For example, if I wanted to implmenet a `linked-list` I would copy the `template.js` file of the data structure and place it into `lib/` with an appropriate name:

`cp src/data-structure/linked-list/template.js lib/list.js`

Pass in user defined data structure (-s) and test template path (-t):

`npm run dtest -- -s lib/list.js -t src/test/data-structure/linked-list`

### Structure