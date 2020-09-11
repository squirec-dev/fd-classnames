# fd-classnames

Lightweight javascript functionality to return a string of classes.
Tests written in Mocha & Chai

## Pre-requisites
Node, Git

## Getting started 

1. Install dev-dependancies
```
npm i
```

2. Run test suite, watch is available with `:watch`
```
npm run test
```

## How to use
You can pass in any number of options into the className function and it will transform them into a string. Valid options are strings and objects, invalid options should handle gracefully. This means if you have an experiment or conditional class, it will filter accordingly.


### Examples
1.
```
const exampleOne = className('coniston ullswater'); // returns 'coniston ullswater'
```
2.
```
const exampleTwo = className('coniston', { ullswater: true }); // returns 'coniston ullswater'
```
3.
```
const exampleThree = className('coniston', { ullswater: false }); // returns 'coniston'
```