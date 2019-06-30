/*
============================================
; Title: wilsonA-exercise-5.2.js
; Author: Professor Krasso
; Date: 22 March 2019
; Modified By: Aaron Wilson
; Description: Pug template render views.
;===========================================
*/

// Header info.
const header = require('../../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 5.3')}\n`);

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');
const path = require('path');
const pug = require('pug');

// Implement express through use of this app variable.
const app = express();

// Set the proper path to point to the views folder.
app.set('views', path.resolve(__dirname, 'views'));

// Set the app view engine to point to the pug template viewing engine.
app.set('view engine', 'pug');

// Create a data variable holding a string.
let data = 'Really? And you thought this.Pug was a Dog!!! Ha :)';

// Build out the get route to send the response to.
app.get('/', (req, res) => {

  // Send a response out to render out the index page from the views folder.
  res.render('index', {

    // Make a property in the object called message that passes in the data variable to be rendered.
    message: data
  });
});

// Create the server on port 8888 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(3333, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${3333}`);
});
