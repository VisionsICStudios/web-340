/*
============================================
; Title: wilsonA-assignment-3.3.js
; Author: Richard Krasso
; Date: 2 March 2019
; Modified By: Aaron Wilson
; Description: Advanced Routing w/ Express
; in NodeJS.
;===========================================
*/

// Header info.
const header = require('../../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 3.3')}\n`);

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const app = express();

// Set the proper path to point to the views folder.
app.set('views', path.resolve(__dirname, 'views'));

// Set the app view engine to point to the ejs template viewing engine.
app.set('view engine', 'ejs');

// Use the morgan logger through the express app method call.
app.use(logger('dev'));

// Route: First get request, response parameters on the app.get method to the employee/employee id.
app.get('/employee/:employeeId',(req, res) => {

  // Create a variable to hold the employee id.
  let employeeId = parseInt(req.params.employeeId, 10);

  // Respond by rendering the function to a 'index' page.
  res.render('index',{
    employeeId: employeeId
  });
});

// Create the server on port 8080 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(3000, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${3000}`);
});
