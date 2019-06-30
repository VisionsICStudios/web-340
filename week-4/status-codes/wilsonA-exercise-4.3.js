/*
============================================
; Title: wilsonA-exercise-4.3.js
; Author: Richard Krasso
; Date: 16 March 2019
; Modified By: Aaron Wilson
; Description: Error Codes w/ Express
; in NodeJS.
;===========================================
*/

// Header info.
const header = require('../../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 4.3')}\n`);

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');

// Implement express through use of this app variable.
const app = express();

// Route: First get request, response parameters on the app.get method to the ok page status.
app.get('/status-ok',(req, res) => {

  // Respond by outputting a status 200.
  res.status(200);
  res.json({

    // This property lets the user know the page loaded ok by said value.
    error: 'this web page loaded: OK.'
  });
});

// Route: Second get request, response parameters on the app.get method to the ok page status.
app.get('/status-unauthorized',(req, res) => {

  // Respond by outputting a status 401.
  res.status(401);
  res.json({

    // This property lets the user know the page is unauthorized by said value.
    error: 'this web page did not load: You are unauthorized.'
  });
});

// Route: Third get request, response parameters on the app.get method to the forbidden page status.
app.get('/status-forbidden',(req, res) => {

  // Respond by outputting a status 403.
  res.status(403);
  res.json({

    // This property lets the user know the page is forbidden by said value.
    error: 'this web page did not load: It is forbidden.'
  });
});

// Route: Fourth get request, response parameters on the app.get method to the not found page status.
app.get('/status-not-found',(req, res) => {

  // Respond by outputting a status 404.
  res.status(404);
  res.json({

    // This property lets the user know the page is not found by said value.
    error: 'this web page did not load: It is not found.'
  });
});

// Route: Fifth get request, response parameters on the app.get method to the method not allowed page status.
app.get('/status-method-not-allowed',(req, res) => {

  // Respond by outputting a status 405.
  res.status(405);
  res.json({

    // This property lets the user know the method on this page is not allowed by said value.
    error: 'this web page did not load: This method is not allowed.'
  });
});

// Route: Sixth get request, response parameters on the app.get method to the internal server error page status.
app.get('/status-internal-server-error',(req, res) => {

  // Respond by outputting a status 500.
  res.status(500);
  res.json({

    // This property lets the user know the method on this page experienced an internal server error by said value.
    error: 'this web page did not load: An internal server error occurred.'
  });
});

// Route: Seventh get request, response parameters on the app.get method to the not implemented page status.
app.get('/status-not-implemented',(req, res) => {

  // Respond by outputting a status 501.
  res.status(501);
  res.json({

    // This property lets the user know the method on this page was not implemented by said value.
    error: 'this web page did not load: It was not implemented.'
  });
});

// Route: Eighth get request, response parameters on the app.get method to the not implemented page status.
app.get('/status-service-unavailable',(req, res) => {

  // Respond by outputting a status 503.
  res.status(503);
  res.json({

    // This property lets the user know the method on this page experienced service unavailability by said value.
    error: 'this web page did not load: Service was unavailable.'
  });
});

// Create the server on port 3333 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(3333, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${3333}`);
});
