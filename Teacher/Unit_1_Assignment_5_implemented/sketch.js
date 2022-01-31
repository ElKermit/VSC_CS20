/*
* CS 20
* Unit 1
* Assignment 5
*
*/


/** Global Variables */

let title = "Pythagoras' Theorum";
let dev = "The sum of the areas of the two squares on the legs (a and b)\n equals the area of the square on the hypotenuse (c)."
let widthB = 200;

let p1, p2, p3, a, b, c, area;

function setup() {
    let sketch = createCanvas(800, 600);
    p1 = createVector(100, 200);
    p2 = createVector(100, 400);
    p3 = createVector(500, 400);
}

function draw() {
    //header
    background(180);
    stroke(0);
    fill(0, 100, 200);
    strokeWeight(2);
    textSize(40);
    text(title, 150, 40);
    textSize(20);
    strokeWeight(1);
    text(dev, 150, 80);

    //p1->p2
    stroke(255, 255, 0);
    strokeWeight(4);
    line(p1.x, p1.y, p2.x, p2.y);

    //p2->p3
    stroke(255, 200, 50);
    line(p2.x, p2.y, p3.x, p3.y);

    //p3->p1
    stroke(255, 100, 100);
    line(p3.x, p3.y, p1.x, p1.y);

    //label sides (length of each side is calculated on the fly)
    stroke(0);
    fill(0);
    noStroke()
    textSize(20);
    a = p2.y - p1.y;
    b = p3.x - p2.x;
    c = sqrt(pow(a, 2) + pow(b, 2));
    text("a = " + a + " units", p1.x + (p2.x - p1.x) / 2, p1.y + (p2.y - p1.y) / 2);
    text("b = " + b + " units", p2.x + (p3.x - p2.x) / 2, p2.y + (p3.y - p2.y) / 2);
    text("c = " + round(c, 3) + " units", p1.x + (p3.x - p1.x) / 2, p1.y + (p3.y - p1.y) / 2);

    //label corners
    text("P1", p1.x - 10, p1.y - 5);
    text("P2", p2.x - 10, p2.y + 20);
    text("P3", p3.x, p3.y);

    //display other computational results
    textSize(16);
    area = a * b / 2;
    text("Area = " + round(area, 3) + " unit^2", 600, 200);

    //legend
    stroke(0);
    fill(0);
    noStroke()
    textSize(18);
    text("Usage:", 200, 500);
    textSize(14);
    text("Cursor 'up', 'down', 'left', 'right' keys move the entire triangle", 200, 520);
    text("'q' and 'w' move the point 3 (P3) left/right", 200, 540);

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        p1.y -= 5;
        p2.y -= 5;
        p3.y -= 5;
    }
    else if (keyCode === DOWN_ARROW) {
        p1.y += 5;
        p2.y += 5;
        p3.y += 5;
    }
    else if (keyCode === LEFT_ARROW) {
        p1.x -= 5;
        p2.x -= 5;
        p3.x -= 5;
    }
    else if (keyCode === RIGHT_ARROW) {
        p1.x += 5;
        p2.x += 5;
        p3.x += 5;
    }
    else if (key === 'q') {
        p3.x -= 10;
    }
    else if (key === 'w') {
        p3.x += 10;
    }
}
