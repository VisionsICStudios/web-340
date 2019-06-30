/*
============================================
; Title:  wilsonA-exercise-7.3.js
; Author: Professor Krasso
: Modified By: Aaron Wilson
; Date:   07 April 2019
; Description: Create a Chai TDD test.
;===========================================
*/


// Header info.
const header = require('../header.js');

// Required modules to run NodeJS correctly w/ express.
const animals = require('../wilsonA-animals');
const chai = require('chai');
const assert = chai.assert;

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 7.3')}\n`);

// Use This method to split the string and convert it to an array.
describe('animals', () => {

  // Pass the describe animals method down the chain of methods/functions to be converted.
  it('should return an array of animals', () => {

    // Make a variable the house the string to be converted to an array.
    const a = animals('Dog,Cat,Bird,Mouse,Snake');

    // Ask if this variable is an array using the assert method.
    assert(Array.isArray(a));
  });
});
