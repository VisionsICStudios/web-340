/*
============================================
; Title: wilsonA-assignment-2.4.js
; Author: Richard Krasso
; Date: 2 March 2019
; Modified By: Aaron Wilson
; Description: Creating EJS Views w/ Express
; in NodeJS.
;===========================================
*/

// Header info.
const header = require('../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Assignment 2.4')}\n`);

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

// Set the proper path to point to the views folder.
app.set('views', path.resolve(__dirname, 'views'));

// Set the app view engine to point to the ejs template viewing engine.
app.set('view engine', 'ejs');

// Route: First get request, response parameters on the app.get method.
app.get('/',(req, res) => {

  // Respond by rendering the function to a 'index' page.
  res.render('index',{
    firstName: 'Aaron',
    lastName: 'Wilson',
    address: '532 W. Brookhaven Road B1, Brookhaven, PA 19015'
  });

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
