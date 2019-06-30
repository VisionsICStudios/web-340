/*
============================================
; Title: app.js | Assignment 9.3
; Author: Professor Krasso
; Date: 14 April 2019
; Modified By: Aaron Wilson
; Description: EMS app w/ EJS (Final Milestone).
;===========================================
*/

// Require statements.
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

// Setup csrf protection.
let csrfProtection = csrf({
  cookie: true
});

/**
 * Establishes a database connection to MongoDB (Atlas).
 * Make sure you are using the credentials of the "user" you created and not your personal login information.
 */
const mongoDB = 'mongodb+srv://visionsicstudios:admin113071@ems-1ekkx.mongodb.net/test?retryWrites=true';

// This new version of the url parser stops the depreciation warnings in the console.
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('EMS App is connected to Atlas MongoDB instance');
});

/**
 * Initializes the express application.
 */
let app = express();

/**
 * Configures the dependency libraries.
 */

// Helmet XSS Prevention.
app.use(helmet.xssFilter());

// Morgan logger.
app.use(logger('dev'));

// Body parser.
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cookieParser());

app.use(csrfProtection);

app.use((req, res, next) => {
    const token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

/**
 * Sets up the view engine, view's directory path, and the server port.
 */
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 6666);

/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Employee[]
 * URL: localhost:6666
 */
app.get('/', (req, res) => {
  Employee.find({}, (err, employees) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      res.render('index', {
        title: 'EMS | Dashboard',
        employees: employees
      })
    }
  });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:6666/new
 */
app.get('/new', (req, res) => {
  res.render('new', {
    title: 'EMS | New'
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:6666/process
 */
app.post('/process', (req, res) => {

  // Send the error 400 to the console.
  if (!req.body.txtEmployeeName) {
    res.status(400).send('All new employee entries must provide a name');
    return;
  }

  // Get the request's form data.
  const employeeName = req.body.txtEmployeeName;
  console.log(employeeName);

  // Create a new employee model.
  let employee = new Employee({
    name: employeeName
  });

  // Save the new employee.
  employee.save((err) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeName + ' was saved successfully to the EMS!');
      res.redirect('/');
    }
  });
});

/**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Employee[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
app.get('/view/:queryName', (req, res) => {
  const queryName = req.params['queryName'];

  Employee.find({'name': queryName}, (err, employees) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        res.render('view', {
          title: 'EMS | View',
          employee: employees
        })
      } else {
        res.redirect('/');
      }
    }
  })
});

/**
 * Creates a new Node.js server and listens on local port 6666.
 */
http.createServer(app).listen(app.get('port'), () => {
  console.log('EMS App started on port ' + app.get('port'));
});
