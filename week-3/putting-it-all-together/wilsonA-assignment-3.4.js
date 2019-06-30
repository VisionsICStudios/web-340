/*
============================================
; Title: wilsonA-assignment-3.4.js
; Author: Richard Krasso
; Date: 8 March 2019
; Modified By: Aaron Wilson
; Description: Putting It All Together w/
; Express in NodeJS.
;===========================================
*/

// Header info.
const header = require('../../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Assignment 3.4')}\n`);

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

// Route: Home get request, response parameters on the app.get method to the home message.
app.get('/',(req, res) => {

  // Respond by rendering the function to a 'index' page.
  res.render('index',{
    message: 'Home page',
    pageId: 'home', // pageId 'home' value creates an active state to the Bootstrap nav bar.
    title: 'Putting It All Together | Home Page' // Label for page title bar.
  });
});

// Route: About get request, response parameters on the app.get method to the about message.
app.get('/about',(req, res) => {

  // Respond by rendering the function to a 'about' page.
  res.render('about',{
    message: 'About page',
    pageId: 'about', // pageId 'about' value creates an active state to the Bootstrap nav bar.
    title: 'Putting It All Together | About Page' // Label for page title bar.
  });
});


// Route: Products get request, response parameters on the app.get method to the products message.
app.get('/products',(req, res) => {

  // Respond by rendering the function to a 'products' page.
  res.render('products',{
    message: 'Products page',
    pageId: 'products', // pageId 'products' value creates an active state to the Bootstrap nav bar.
    title: 'Putting It All Together | Products Page' // Label for page title bar.
  });
});

// Route: Contact get request, response parameters on the app.get method to the contact message.
app.get('/contact',(req, res) => {

  // Respond by rendering the function to a 'contact' page.
  res.render('contact',{
    message: 'Contact page',
    pageId: 'contact', // pageId 'contact' value creates an active state to the Bootstrap nav bar.
    title: 'Putting It All Together | Contact Page' // Label for page title bar.
  });
});

// Create the server on port 8080 to both run NodeJS and log to the console that it exists.
http.createServer(app).listen(3000, () => {

  // Log out to the console the server is listening.
  console.log(`Application is successfully listening on port: ${3000}`);
});
