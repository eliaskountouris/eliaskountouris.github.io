function Circle(xpos_, ypos_, mass_, rad_, xvel_, yvel_, color_, number_) {
  this.xpos = xpos_;
  this.ypos = ypos_;
  this.mass = mass_;
  this.rad = rad_;
  this.xvel = xvel_;
  this.yvel = yvel_;
  this.color = color_;
  this.number = number_;

  this.accelX = 0;
  this.accelY = 0;

  this.updatePos = function (dt) {
    this.xpos += this.xvel * dt;
    this.ypos += this.yvel * dt;
  };

  this.updateVel = function (dt) {
    this.xvel += this.accelX * dt;
    this.yvel += this.accelY * dt;
  };
}

function didCollide(A, B) {
  var dx = A.xpos - B.xpos;
  var dy = A.ypos - B.ypos;
  var R = A.rad + B.rad;
  if (Math.sqrt(dx * dx + dy * dy) <= R) {
    return true;
  }
  return false;
}

function ballGrav(dt, gconst) {
  for (var i = 0; i < balls.length; i++) {
    for (var j = 0; j < balls.length; j++) {
      if (i != j && didCollide(balls[i], balls[j]) == false) {
        var dy = balls[i].ypos - balls[j].ypos;
        var dx = balls[i].xpos - balls[j].xpos;
        var r = Math.sqrt(dx * dx + dy * dy);
        var AMag = -1*(gconst * balls[j].mass) / (r * r);
        var theta = Math.atan2(dy, dx);

        balls[i].accelX = AMag * Math.cos(theta);
        balls[i].accelY = AMag * Math.sin(theta);

        balls[i].updateVel(dt);
      }
    }
    balls[i].updatePos(dt);
  }
}