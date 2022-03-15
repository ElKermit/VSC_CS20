/*
* CS 20
* Unit 1
* Example 2
*/

/** Global Variables */
let textX = 300;

function setup() {
  let sketch = createCanvas(600, 400);
}

function draw() {
  background(255, 0, 0);

  noStroke();
  fill(255, 255,0);
  textSize(44);
  text("Welcome to CS20!", textX, 150);

  textX = textX - 2;

  if (textX < -250) {
    textX = 600;
    print("too far right, restart on the left");
  }
}
