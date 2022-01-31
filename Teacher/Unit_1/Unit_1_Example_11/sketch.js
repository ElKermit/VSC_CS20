/*
* CS 20
* Unit 1
* Example 11
* Mouse mouse cursor to draw rainbow color stars path
* -> click left mouse to increase font-size
*/

/** Global Variables */
let fontSize = 20;
let drawing = '*';

function setup() {
  let sketch = createCanvas(600, 400);
  background(0);
  textAlign(CENTER, CENTER);
}//end setup

function draw() {
  textSize(fontSize);
  fill(random(255), random(255), random(255));
  text(drawing, mouseX, mouseY);
}//end draw

function mousePressed() {
  fontSize += 10;
  fill(random(255), random(255), random(255));
  text(drawing, mouseX, mouseY);
}//end mousePressed
