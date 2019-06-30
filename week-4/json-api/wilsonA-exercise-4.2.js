/*
============================================
; Title: wilsonA-exercise-4.2.js
; Author: Richard Krasso
; Date: 16 March 2019
; Modified By: Aaron Wilson
; Description: JSON API's w/ Express
; in NodeJS.
;===========================================
*/

// Header info.
const header = require('../../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 3.2')}\n`);

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');

// Implement express through use of this app variable.
const app = express();

// Route: First get request, response parameters on the app.get method using this student id.
app.get('/student/:id',(req, res) => {

  // Create a variable for my actual student id.
  let id = parseInt(req.params.id = 21174488, 8);

  // Send a response of a json object w/ these properties and values.
  res.json({
    firstName: 'Aaron',
    lastName: 'Wilson',
    studentId: id,
    school: 'Bellevue University',
    degreeProgram: 'Web Development'
  });
});

// Create the server on port 4000 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(4000, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${4000}`);
});
