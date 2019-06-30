/*
============================================
; Title: wilsonA-exercise-5.2.js
; Author: Professor Krasso
; Date: 22 March 2019
; Modified By: Aaron Wilson
; Description: EJS template if else render.
;===========================================
*/

// Header info.
const header = require('../../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 5.2')}\n`);

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');
const path = require('path');

// Implement express through use of this app variable.
const app = express();

// Set the proper path to point to the views folder.
app.set('views', path.resolve(__dirname, 'views'));

// Set the app view engine to point to the ejs template viewing engine.
app.set('view engine', 'ejs');

// Create an array of names.
let names = ['Aaron', 'Robert', 'Willie', 'Jayme', 'Fred'];

// Build out the get route to send the response to.
app.get('/', (req, res) => {

  // Send a response out to render out the index page from the views folder.
  res.render('index', {

    // Make a property in the object called names that passes in the names array.
    names: names
  });
});

// Create the server on port 8888 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(3000, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${3000}`);
});
