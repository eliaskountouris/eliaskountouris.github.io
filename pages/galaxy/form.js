let pause = false;
let gravity = false;
var gconst = 0.1;
var number = 0;

document.getElementById("pause").onclick = function () {
  if (pause) {
    pause = false;
    document.getElementById("pause").innerHTML = "Pause";
  } else {
    pause = true;
    document.getElementById("pause").innerHTML = "Unpause";
  }
};


document.getElementById("reset").onclick = function () {
    balls.length = 0;
};



  