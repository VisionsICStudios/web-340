/*
============================================
; Title:  wilsonA-exercise-8.2.js
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date:   14 April 2019
; Description: XSS Cross Site Scripting.
;===========================================
*/

// Require statements and add-in modules.
const express = require('express');

const http = require('http');

const logger = require('morgan');

const helmet = require('helmet');

const path = require('path');

// Header info.
const header = require('header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 8.2')}\n`);

// Initialize express for application use.
const app = express();

// All use statements needed for application functionality.
app.use(logger('dev'));

app.use(helmet.xssFilter());

// All EJS set statements needed for EJS template views.
app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

// All http routing calls.
app.get('/', (req, res) => {

  response.render('index', {

    message: 'XSS Prevention Example'

  });

});

// Launch XSS App Node server.
http.createServer(app).listen(6666, () => {
  console.log("XSS functionality dev app started on port 6666!");
});
