/*
* CS 20
* Unit 1
* Assignment 1 Implemented
*
* Link to an easy color picker:
* https://www.w3schools.com/colors/colors_picker.asp
*/


/** Global Variables */

function setup() {
  let sketch = createCanvas(300, 400);
  rectMode(CENTER); //running this command in setup sets the mode only once
  background(179, 89, 0);
}

function draw() {
  
  fill(221, 153, 255);
  rect(150, 30, 120, 80, 10);

  //at least 10 shapes
  //fill, stroke, strokeWeight
  //triangle, quad or point (Help... reference)

}

function mousePressed() {
  print(mouseX + ",   " + mouseY);
}


