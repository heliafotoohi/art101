/**
* Author: Helia Fotoohi
* Created: 02/02/2222
*
**/
//test 1 - create functions
function firstThing(test) {
  console.log(test + ": This is the first thing. <br>")
}

function secondThing(test) {
  console.log(test + ": This is the second thing. <br>")
}

function thirdThing(test) {
  console.log(test + ": This is the third thing. <br>")
}

firstThing("Test 1");
secondThing("Test 1");
thirdThing("Test 1");

//test 2 - in order
setTimeout(function() {
  firstThing("TEST 2");
}, 0);
setTimeout(function() {
  secondThing("TEST 2");
},0);
setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

//test 3 - order is 2, 3, 1
setTimeout(function() {
  firstThing("TEST 3");
},3000);
setTimeout(function() {
  secondThing("TEST 3");
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 2000);
