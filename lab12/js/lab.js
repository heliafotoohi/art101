/**
* Author: Helia Fotoohi
* Created: lab 12
*
**/

function getDirection(string) {
  len = str.length;
  mod = len % 5;
  if (mod == 0) {
    return "Harry Styles"
  }
  else if (mod == 1) {
    return "Zayn Malik"
  }
  else if (mod == 2) {
    return "Niall Horan"
  }
  else if (mod == 3) {
    return "Liam Payne"
  }
  else if (mod == 4) {
    return "Louis Tomlinson"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var onemember = getDirection (name);
    newText = "<p> Simon Cowell has chosen you as " + onemember + "</p>";
    document.getElementById("output").innerHTML = newText;
})
