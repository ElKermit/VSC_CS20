/*
* CS 20
* Unit 1
* Example 5
* Live server extension required to load resources locally
* https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
* -> right-click into html file and select 'open with live server' to start
*/


/*
1. save image (.png or .gif or .jpg)
       - short name, no spaces
2. upload into P5
3. Write 3 lines of code
       a) set up variables to hold images
       b) load the images into the variables
       c) draw to screen using image
*/

/** Global Variables */
let cakePic, conPic, presPic;
let confetti = 400;
let font1;

function preload() {
  cakePic = loadImage("./images/cake.png");
  conPic = loadImage("./images/confetti.png");
  presPic = loadImage("./images/present.png");
  font1 = loadFont("./resources/PermanentMarker.ttf");
}

function setup() {
  let sketch = createCanvas(600, 400);
  textSize(16)

}

function draw() {
  background(0);
  image(conPic, 0, 0, 600, confetti);
  if(confetti < 600){
    confetti++;
  }else{
    confetti=400;
  }

  image(cakePic, 100, 150, 100, 100);
  image(presPic, 400, 150, 100, 100);

  fill(255,55,55);
  textSize(50);
  textFont(font1);
  text("Happy Birthday!", 115, 300);
}
