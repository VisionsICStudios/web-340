/*
============================================
; Title:  wilsonA-exercise-7.2.js
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date:   07 April 2019
; Description: TDD unit test in action.
;===========================================
*/

// Required modules to run NodeJS correctly w/ express.
const assert = require("assert");

// Header info.
const header = require('../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 7.2')}\n`);


describe("String#split", () => {
  it("should return an array of animals", () => {
    assert(Array.isArray("Dog,Cat,Pig,Horse,Goat".split(",")));
  });
});

const getAnimals = (str) => {
  return str.split(',');
 }

 module.exports = getAnimals;
