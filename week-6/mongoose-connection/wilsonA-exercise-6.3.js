/*
============================================
; Title: wilsonA-exercise-6.3.js
; Author: Professor Krasso
; Date: 29 March 2019
; Modified By: Aaron Wilson
; Description: Mongoose connection.
;===========================================
*/

// Header info.
const header = require('../../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 6.3')}\n`);

// Required modules to run NodeJS correctly w/ express.
const express = require('express');
const http = require('http');
const logger = require('morgan');
const mongoose = require('mongoose');

// Implement express through use of this app variable.
const app = express();

// MongoDB | Atlas connection
const mongoDB = "mongodb+srv://visionsicstudios:uniCi2i2@ems-1ekkx.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", () => {
  console.log("Application connected to Atlas MongoDB instance");
});

// Use the morgan logger through the express app method call.
app.use(logger('dev'));





// Create the server on port 8888 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(5555, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${5555}`);
});
