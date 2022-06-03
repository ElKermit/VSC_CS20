/*
* CS 20
* Unit 1
* Practice 5
* working with arrays
*/

/** Global Variables */
var circles = [];

function setup() {
  createCanvas(500, 500);
  //the two for loops in this case create an initial square shape of little circles
  for (var x = 50; x < width - 300; x += 20) {    //generate x-coordinate for circles
    for (var y = 50; y < height - 300; y += 20) { //generate y-coordinate for circles
      circles.push(new Circle(x, y));             //create circle object at x,y and add it to the array
    }
  }
}

function draw() {
  background(50);
  for (var b = 0; b < circles.length; b++) {
    circles[b].show(); //draw circle objects  
  }
}

//circle object, draws a circle at a given x,y coordinate and moves its position diagonaly 
function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.dx = 1;
  this.dy = 1

  this.show = function () {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 10, 10); //draw circle

    this.x += this.dx //set x-coordinates for next position 
    this.y += this.dy //set y-coordinates for next position

    //this reverses the direction of the circles so they stay on the canvase
    if (this.x < 51 || this.y < 51) {
      this.dx = 1
      this.dy = 1
    }
    if (this.x > 430 || this.y > 430) {
      this.dx = -1
      this.dy = -1
    }
  }
}