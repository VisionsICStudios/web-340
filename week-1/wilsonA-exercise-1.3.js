/*
============================================
; Title: wilsonA-exercise-1.3.js
; Author: Richard Krasso
; Date: 21 February 2019
; Modified By: Aaron Wilson
; Description: Using and building modules
; in NodeJS.
;===========================================
*/

// Header info.
const header = require('../header.js');
const url = require('url');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Exercise 1.3') + '\n');

// Make a null variable named sections.
let pieces = null;

// Create a variable as a function with a single parameter called array.
const getPieces = (array) => {

  // Create the variable to store a url for parsing or breaking down into sections of strings.
  const urlParse = url.parse('http://www.mymadeupurl.com/something?name=wilson');

  // make the parameter an empty array.
  array = [];

  // Push three separate segments of the url in the new array.
  array.push(urlParse.protocol);
  array.push(urlParse.host);
  array.push(urlParse.query);

  // Iterate over the new array using a for loop to output to the console the returned results.
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Call the getPieces function and pass in the pieces variable as its argument.
getPieces(pieces);
