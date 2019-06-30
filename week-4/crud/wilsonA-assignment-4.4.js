/*
============================================
; Title:  wilsonA-assignment-4.4.js
; Author: Professor Krasso
; Date:   16 March 2019
; Modified By: Aaron Wilson
; Description: Demonstrates CRUD operations
: in a Node.js API.
;===========================================
*/

// Header info.
const header = require('../../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Assignment 4.4')}\n`);

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');

// Implement express through use of this app variable.
const app = express();

// Route: First get request, response parameters on the app.get method to send a GET response string message.
app.get("/get", (req, res) => {

  // Invoke the response of the send method with a string.
  res.send('Hello, this is a http GET request sent to the API.');
});

// Route: First put request, response parameters on the app.get method to send a PUT response string message.
app.put("/put", (req, res) => {

  // Invoke the response of the send method with a string.
  res.send('Hello, this is a http PUT request sent to the API.');
});

// Route: First post request, response parameters on the app.get method to send a POST response string message.
app.post("/post", (req, res) => {

  // Invoke the response of the send method with a string.
  res.send('Hello, this is a http POST request sent to the API.');
});

// Route: First post request, response parameters on the app.get method to send a DELETE response string message.
app.delete("/delete", (req, res) => {

  // Invoke the response of the send method with a string.
  res.send('Hello, this is a http DELETE request sent to the API.');
});

// Create the server on port 8888 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(8888, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${8888}`);
});
