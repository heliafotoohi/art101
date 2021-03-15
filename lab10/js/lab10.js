/**
* Author: Helia Fotoohi
* Created: lab 10
*
**/

var newName = sortUserName(userName);
var userName = document.getElementById("name");

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName(userName) {
  // console.log('ALPHABET'.toLowerCase()); // 'alphabet'
   userName = userName.toLowerCase();
    console.log("userName =", userName);
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    varnameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return userName.toLowerCase().split("").sort().join("");
}

document.writeln("This is what you wrote down: ", userName, "<br><br>");
document.writeln("And here's your new name made just for you: ",
     newName, "</br>");




//function sortUserName(userName) {
    // // convert to lower case
    // userName = userName.toLowerCase();
    // console.log("userName =", userName);
    // // split string to array
    // var nameArray = userName.split('');
    // console.log("nameArray =", nameArray);
    // // sort the array
    // var nameArraySort = nameArray.sort();
    // console.log("nameArraySort =", nameArraySort);
    // // join array back to a string
    // var nameSorted = nameArraySort.join('');
    // console.log("nameSorted =", nameSorted);
    // // Note that I could have done the above lines as a single line:
    // //   userName.toLowerCase().split("").sort().join("")
    //return userName.toLowerCase().split("").sort().join("");
//}
