var start = new Date().getTime();
var highScore = 1000000 ;
function move(){
    var left;
    var top;
    var width;
    left = Math.random() * 300 ;
    top = Math.random() * 300 ;
    width = (Math.random() * 500) + 50 ;
    document.getElementById("box").style.width = width + "px";
    document.getElementById("box").style.left = left + "px";
    document.getElementById("box").style.top = top + "px";
    document.getElementById("box").style.display = "block";
    start = new Date().getTime();
    document.getElementById("box").style.backgroundColor = getRandomColor();
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
move();
getRandomColor();
document.getElementById("box").onclick = function(){
    this.style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start)/1000;
    alert( "Reaction Time : " + timeTaken);
    if(timeTaken < highScore){
        highScore = timeTaken;
    }
    document.getElementById("highScore").innerHTML = "High Score : " + highScore + " seconds" ;
    move();
}
