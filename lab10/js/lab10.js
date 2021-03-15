/**
* Author: Helia Fotoohi
* Created: lab 10
*
**/

var sortButton = document.getElementById("sort-button");

//event listener
sortButton.addEventListener("click", function(){
  // find elements
  var output = document.getElementById("output");
  var name = document.getElementById("user-name");
  var userName = name.value;

  //sort name
  var sortedName = userName.toUpperCase().replace(/\s+/g, '').split('').sort().join('');

  //writes output to page
  var newEl = document.createElement("p");
  newEl.innerHTML = sortedName;
  output.append(newEl);
});
