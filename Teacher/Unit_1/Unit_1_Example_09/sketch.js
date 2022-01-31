/*
* CS 20
* Unit 1
* Example 9
* Live server extension required to load resources locally
*/

/** Global Variables */
let font1, font2
let pic1;
let bomby = 50;
let speed = 1;
let timer;

function preload() {
  font1 = loadFont("./fonts/Lobster.ttf");
  pic1 = loadImage("./images/explosion.png");
}

function setup() {
  let sketch = createCanvas(600, 600);
  textSize(20)
  textFont(font1);
}

function draw() {
  background(220, 0, 0);
  fill(0);
  text("Press cursor 'up' to slow your fall!", 60, 20);
  fill(255);
  square(115, bomby, 20);
  bomby += speed;
  if (bomby > height) {
    image(pic1, 10, 320, 250, 300);
    text("Armeggedon is here!", 20, 50);
    text("You survived: " + round(timer, 3) + " seconds", 20, 100);
  } else {
    fill(255);
    timer = millis() / 1000;
    text("Time elapsed: " + round(timer, 3), 20, 100);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    bomby -= 5;
  }
}
