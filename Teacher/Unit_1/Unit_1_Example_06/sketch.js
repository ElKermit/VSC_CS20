/*
* CS 20
* Unit 1
* Example 6
* todo: find better images
* usage: press 'L' for light (bulb-on), press 'D' for dark (bulb-off)
*        click on bulb to toggle on/off
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
let bulb_on;
let bulb_off;
let isOn = false; //boolean

function preload() {
  bulb_on = loadImage("./images/bulb_on.png");
  bulb_off = loadImage("./images/bulb_off.png");

}

function setup() {
  let sketch = createCanvas(300, 300);
}

function draw() {
  if (isOn) {
    background(250);
    image(bulb_on, 0, 0, width, height);

  } else {
    background(50);
    image(bulb_off, 0, 0, width, height);
  }

}

function keyPressed() {
  if (key === 'l') {
    isOn = true;
  }
  if (key === 'd') {
    isOn = false;
  }

}

function mousePressed() {
  if (isOn) {
    isOn = false;
  } else {
    isOn = true;
  }

}
