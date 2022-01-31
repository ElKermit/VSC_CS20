/*
* CS 20
* Unit 2
* Example 1
*/

/** Global Variables */
var mouseCoordinates = "";


function setup() {
  let sketch = createCanvas(600, 400);
}


function draw() {
  background(220);

  //red ellipse with black stroke
  fill(200, 100, 100); //RGB color values 0-255
  strokeWeight(2);
  stroke(0); //single greyscale value 0-255 
  ellipse(100, 100, 150, 75);


  //blue line
  strokeWeight(4);
  stroke(0,0,200);
  line(50, 350, 500, 50);

  //circle with no stroke, filled yellow
  noStroke();
  fill(255,255,20);
  circle(400, 350, 75);

  //green square with semi-transparent green fill
  fill(0, 200, 0,100);
  strokeWeight(3);
  stroke(0, 100,100);
  square(100, 50, 300);

  //text to output mouse click coordinates
  fill(200, 25, 25);
  strokeWeight(0);
  stroke(0);
  text(mouseCoordinates, 150, 20);

}

function mousePressed() {
  print("Mouse click X-pos: " + mouseX + ", Y-pos: " + mouseY); //console only
  mouseCoordinates = "Mouse click X-pos: " + mouseX + ", Y-pos: " + mouseY; //vaiable to be used in text()
}