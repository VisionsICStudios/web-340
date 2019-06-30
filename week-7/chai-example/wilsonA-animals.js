/*
============================================
; Title:  wilsonA-animals.js
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 07 April 2019
; Description: Method used in the Chai test.
;===========================================
*/

// This is the animals method created to make it work.
const animals = (str) => {

  // Return the splitting of the string.
  return str.split(",");
}
// We export the animals method to be used in test folder wilsonA-exercise-7.3.js file.
module.exports = animals;
