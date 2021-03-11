  for (var index=0 ; index<10 ; index++){
    //code block


/* print in 1, 4, 3, 2 order */
function printing(){
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 3);
  setTimeout(function() {
    console.log(3);
  }, 2);
  setTimeout(function() {
    console.log(4);
  }, 1);
}
printing();
