/*
============================================
; Title: wilsonA-assignment-3.4.js
; Author: Richard Krasso
; Date: 6 March 2019
; Modified By: Aaron Wilson
; Description: Putting It All Together w/
; Express in NodeJS.
;===========================================
*/

// Header info.
const header = require('../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Assignment 3.4')}\n`);

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

// Create the server on port 8080 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(3000, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${3000}`);
});
