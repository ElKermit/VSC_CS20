/*
* CS 20
* Unit 1
* Example 8
* Live server extension required to load resources locally
*/

/** Global Variables */
let first, second;
let transparency = 255;

function preload() {
  first = loadImage("./images/start.png");
  second = loadImage("./images/end.png");
}

function setup() {
  let sketch = createCanvas(300, 415);
  imageMode(CENTER);
}

function draw() {
  background(0);
  tint(255, 255);
  image(second, 150, 207, 300, 415);
  tint(255, transparency);
  image(first, 150, 207, 300, 415);

  transparency -= 1;
  if (transparency < 1) {
    transparency = 255;
  }
}

function mousePressed() {
  transparency -= 5;
}