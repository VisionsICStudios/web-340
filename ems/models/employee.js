/*
============================================
; Title: employee.js
; Author: Professor Krasso
; Date: 14 April 2019
; Modified By: Aaron Wilson
; Description: EMS app w/ EJS (Milestone 4).
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  name: {type: String, required: true }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);
