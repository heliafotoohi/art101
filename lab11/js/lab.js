/**
* Author: Helia Fotoohi
* Created: lab 11
*
**/

//find element or define that b lol
var challengeB = $('#challengeB');

//create ms button
var myButton = "<button>Click me missy</button>";
//$("#challengeB").append("<button id=challengeB>");

//add buttons to webpage
challengeB.append(myButton);


//making the button toggle the special class
$('#challengeB button').click(function() {
  $('#challengeB').toggleClass('special');
})
