/*
============================================
; Title: wilsonA-exercise-2.2.js
; Author: Richard Krasso
; Date: 2 March 2019
; Modified By: Aaron Wilson
; Description: Hello World w/ Express
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
console.log(header.display('Aaron', 'Wilson', 'Exercise 2.2') + '\n');

// First request, response parameters on the app.use method.
app.use((req, res) => {

  // Log an request output to the console.
  console.log(`Here is a request to: ${req.url}`);

  // Respond by ending the function w/ a 'Hello World!'.
  res.end('Hello World!\n');

});

// Create the server on port 8080 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(8080, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${8080}`);
});
