/*
* CS 20
* Unit 1
* Example 3
*/

/** Global Variables */
let lineY = 50;

function setup() {
  let sketch = createCanvas(600, 600);
  background(255, 255, 100);
}

function draw() {
  //background(255, 255,0);
  stroke(random(255), random(255), random(255));
  line(50, lineY, mouseX, mouseY);
  lineY = lineY + 2;
  if (lineY > 400) {
    lineY = 0;
  }
  fill(random(255), random(255), random(255));
  circle(random(400), random(400), random(100));

}
function mousePressed() {
  background(255, 255, 0);

}

