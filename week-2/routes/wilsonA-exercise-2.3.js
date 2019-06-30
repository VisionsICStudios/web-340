/*
============================================
; Title: wilsonA-exercise-2.3.js
; Author: Richard Krasso
; Date: 2 March 2019
; Modified By: Aaron Wilson
; Description: Creating routes w/ Express
; in NodeJS.
;===========================================
*/

// Header info.
const header = require('../header.js');

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');
const app = express();

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Exercise 2.3') + '\n');

// First get request, response parameters on the app.get method.
app.get('/',(req, res) => {

  // Respond by ending the function w/ a 'Welcome to the Home Page! message'.
  res.end('Welcome to the Home Page!\n');

});

// First get request, response parameters on the app.get method.
app.get('/about',(req, res) => {

  // Respond by ending the function w/ a 'Welcome to the About Page! message'.
  res.end('Welcome to the About Page!\n');

});

// First get request, response parameters on the app.get method.
app.get('/contact',(req, res) => {

  // Respond by ending the function w/ a Welcome to the Contact Page! message'.
  res.end('Welcome to the Contact Page!\n');

});

// A get request, response parameters on the app.use method for a 404 error output.
app.use((req, res) => {

  // Respond to an error w/ a 404 error code/
  res.statusCode = 404;
  // Respond by ending the function w/ a '404!'.
  res.end('404!');

});

// Create the server on port 8080 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(3000, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${3000}`);
});
