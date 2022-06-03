/*
* CS 20
* Unit 4
* Example 1
* Welcome
*/

//Global Variables
let face;
let font1;


function preload() {
  face = loadImage("images/happyface.png");
  font1 = loadFont("fonts/Hanalei.ttf");
}//end preloading of images and fonts

function setup() {
  createCanvas(700, 500);
}//end setup



function draw() {
  background(200, 50, 50);
  image(face, 100, 50, 300, 300);

  drawText("Spring is Coming!");


}//end draw

function drawText(message) {
  textFont(font1);
  textSize(80);
  textAlign(CENTER);
  text(message, mouseX, 420);

}//end drawText



