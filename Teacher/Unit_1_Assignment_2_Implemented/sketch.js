/*
* CS 20
* Unit 1
* Assignment 2 Implemented
*
* Collector card 
*/


/** Global Variables */
let backCircle;
let picMain, picIcon, picCloseup;

function setup() {
  createCanvas(400, 600);
  background(30, 200, 40);

  

  picMain = loadImage("./images/main.jpg");
  picIcon = loadImage("./images/icon.png");
  picCloseup = loadImage("./images/close.jpg");

  backCircle = new p5.Vector(0, 0);
  backCircle.add(width/2, height/2+250);
}

function draw() {
  //circular background 
  noStroke();
  fill(255);
  circle(backCircle.x, backCircle.y, 800);

  //card outline
  stroke(0,0,0);
  strokeWeight(4);
  noFill();
  rect(0,0,width,height);

  stroke(10,100,10);
  strokeWeight(2);
  noFill();
  rect(5,5,width-10,height-10,5);

  //main image
  imageMode(CENTER);
  image(picMain,width/2-80,height/2+100, 225, 375);

  //heading
  stroke(200);
  strokeWeight(3);
  fill(0,100,0);
  textSize(25);
  textAlign(CENTER);
  text("Irish Terrier",width/2,50);

  //header text
  stroke(150);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER);
  textWrap(WORD);
  text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",10,80,width-20);

  //icon
  image(picIcon,width-50,height-50, 50, 50);

  //head image
  image(picCloseup,width/2 + 100,height/2+50, 100, 100);



}


