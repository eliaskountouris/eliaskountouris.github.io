let lastTime = new Date().getTime();
let currentTime = 0;
var balls = new Array();
var gconst = 5;

var c = document.getElementById("bgd");
var ctx = c.getContext("2d");
ctx.canvas.width = (50 * window.innerWidth) / 100;
ctx.canvas.height = (99 * window.innerHeight) / 100;
ctx.font = "18px Arial";

function drawObjects(ctx, circles) {
  for (const circle of circles) {
    ctx.beginPath();
    ctx.arc(circle.xpos, circle.ypos, circle.rad, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

document.getElementById("populate").onclick = function () {
  number = parseFloat(document.getElementById("num").value);
  var maxRadA = ctx.canvas.width / 2.4;
  var maxRadB = ctx.canvas.width / 4.8;
  for (var i = 0; i < number; i++) {
    var sx = Math.random() < 0.5 ? -1 : 1;
    var sy = Math.random() < 0.5 ? -1 : 1;
    if (i > (number / 2)) {
      var x = sx * (Math.random() * maxRadA) + ctx.canvas.width / 2.4;
      var cx = maxRadA - x;
      var yR = Math.sqrt(maxRadA * maxRadA - cx * cx);
      x += ctx.canvas.width / 12;
      var y = sy * (Math.random() * yR) + ctx.canvas.height / 2;
    }
    else{
      var x = sx * (Math.random() * maxRadB) + ctx.canvas.width / 4.8;
      var cx = maxRadB - x;
      var yR = Math.sqrt(maxRadB * maxRadB - cx * cx);
      x += ctx.canvas.width / 3.4;
      var y = sy * (Math.random() * yR) + ctx.canvas.height / 2;
    }

    var dy = y - ctx.canvas.height / 2;
    var dx = x - ctx.canvas.width / 2;
    var r = Math.sqrt(dy * dy + dx * dx);
    var theta = Math.atan2(dy, dx) + Math.PI / 2;
    var velInit = Math.pow((2 * gconst) / r, 1 / 4);
    var vx = velInit * Math.cos(theta);
    var vy = velInit * Math.sin(theta);

    balls.push(new Circle(x, y, 1, 1, vx, vy, (0, 0, 0), balls.length + 1));
  }
};

function update() {
  currentTime = new Date().getTime();
  var dt = (currentTime - lastTime) / 1000;
  dt *= 10;
  if (!pause) {
    ballGrav(dt, gconst);
  }
  lastTime = currentTime;
  ctx.clearRect(0, 0, bgd.width, bgd.height);
  drawObjects(ctx, balls);
  window.requestAnimationFrame(update);
}

update();
