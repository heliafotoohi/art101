<script text="test/javascript" src="js/filename.js">
    	</script>

function userName(firstName,lastName){
  var result= firstName + lastName;
  return result;
}

var firstName = "toni"
var lastName = 25;
var arrBubble = ["helia","matilda","toni"]

console.log(arrBubble[2]);

function heliaCalculator(firstNum,secondNum){
console.log(firstNum+secondNum);
console.log(firstNum*secondNum);
console.log(firstNum-secondNum);
console.log(firstNum/secondNum);
}
heliaCalculator(12,4);
heliaCalculator(21,3);

function userName(firstName,lastName) {
  var result= firstName + lastName;
  return result;
}

console.log(userName"helia","fotoohi"))

setTimeout(myVarFun,2000)


setTimeout(function(){
    console.log("Look mah! No name!");
},2000);

<!DOCTYPE html>
<html>
<body>

<p>Play and pause the video.</p>

<video id="myVideo" width="320" height="176" controls>
  <source src="mov_bbb.mp4" type="video/mp4">
  <source src="mov_bbb.ogg" type="video/ogg">
  Your browser does not support HTML5 video.
</video>

<script>
var vid = document.getElementById("myVideo");
vid.onpause = function() {
  alert("The video has been paused");
};
</script>

<p>Video courtesy of <a href="https://www.bigbuckbunny.org/" target="_blank">Big Buck Bunny</a>.</p>

</body>
</html>

setTimeout(()=> {
    console.log('greetings from setTimeout');
}, 5000);

//change to

let message = ()=> {
  console.log('greetings from setTimeout');
}

setTimeout(message, 5000);
