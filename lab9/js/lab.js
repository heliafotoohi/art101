/**
* Author: Helia Fotoohi
* Created: lab 9
*
**/

// declaring variables using elements

var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("p");

new1El.innerHTML = "hey friends";
new2El.innerHTML = "what's crackin?";

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);
