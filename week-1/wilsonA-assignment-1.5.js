/*
============================================
; Title: wilsonA-assignment-1.5.js
; Author: Richard Krasso
; Date: 21 February 2019
; Modified By: Aaron Wilson
; Description: Our version of "Hello World!"
; NodeJS style.
;===========================================
*/

// Header info.
const header = require('../header.js');
const http = require("http");

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Assignment 1.5') + '\n');

// Create a getRequest function to handle two parameters req and res, short for request and response.
function getRequest(req, res) {

// Make a body variable to hold the text string output displayed to the web browser.
const body = "This is Aaron Wilson saying 'Hello World' to the NodeJS community!";

    // Create another variable to make sure the body string outputs in its entirety.
    let contentLength = body.length;

    // Respond with a writeHead method that outputs the text string in an object literal property.
    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    // End the response of the body message.
    res.end(body);

}

// Create a mutable variable called serve to handle the server port configuration.
let serve = http.createServer(getRequest);

// Pass in port.
port = process.env.PORT || 8080;

// Create a function off of serve.listen method.
serve.listen(port, function() {

  // Log to the console to display that the server is running on the port variable address of 8080.
  console.log(`My NodeJS server is running on: web browser address 127.0.0.1:${port}`);
});


console.log();
