/*
;============================================
; Title:  Assignment 6.4 | (Milestone 2)
; Author: Richard Krasso
; Date:   March 29 2019
; Modified By: Aaron Wilson
; Description: EMS | tabs.js file.
;============================================
*/

// JavaScript Document - JQuery Tab Functionality

//tab functionality
function toggleTab (activeTab, panelId) {

	// Create four undefined variables.
	let i, x, tabs, buttons;

	// Make the tabs variable an array.
	tabs = document.getElementsByClassName("tabPanel");

	// Loop through the tabs array w/ variable i as the iterations.
	for (i = 0; i < tabs.length; i++) {

		// Hide the current tab as the current iteration in the tabs array.
		tabs[i].style.display = "none";
	}

	// Make the buttons variable an array.
	buttons = document.getElementsByClassName("tabBtn");

	// Loop through the buttons array w/ variable x as the iterations.
	for (x = 0; x < buttons.length; x++) {

		// Replace the active state w/ a normal state of the current linked tab as the current iteration in the buttons array.
		buttons[x].className = buttons[x].className.replace(" active", "");

	}

	// Show the current tab.
	document.getElementById(panelId).style.display = "block";

	// Make the current tab active.
	activeTab.currentTarget.className += " active";
}
