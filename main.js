let balls = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB)

  for (var i = 0; i < 15; i++) {
    balls.push(new Balle(color(0, 0, 0)))
  }
}

function draw() {
  background(100)

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw()
    balls[i].update()
    balls[i].check()
  }
}

function Balle(c) {
  // starting positions
  this.xpos = random(0, windowWidth)
  this.ypos = random(0, windowHeight)

  // Speed
  this.xspeed = random(0.08, 0.2) * cos(random(TWO_PI))
  this.yspeed = random(0.08, 0.2) * sin(random(TWO_PI))
  this.c = c

  this.draw = function () {
    noStroke()
    fill(c)
    ellipse(this.xpos, this.ypos, 3, 3)
  }

  this.update = function () {
    this.xpos = this.xpos + this.xspeed
    this.ypos = this.ypos + this.yspeed
  }

  this.check = function () {
    if (this.xpos < 0 || this.xpos > windowWidth) this.xspeed = this.xspeed * -1
    if (this.ypos < 0 || this.ypos > windowHeight)
      this.yspeed = this.yspeed * -1
  }
}
