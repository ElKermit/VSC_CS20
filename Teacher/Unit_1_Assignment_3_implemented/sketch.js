/*
* CS 20
* Unit 1
* Assignment 3 Points
*
*/


/** Global Variables */
let team1Name = "BigAnts";
let team2Name = "FastSnails";
let team3Name = "GiantFlees";
let team1Wins, team1Losses, team1Points,
    team2Wins, team2Losses, team2Points,
    team3Wins, team3Losses, team3Points;
let font1, picBack;

function preload() {
    font1 = loadFont("./resources/Lobster.ttf");
    picBack = loadImage("./resources/back.png");
}

function setup() {
    //canvas setup
    createCanvas(800, 600);
    background(255, 255, 200);
    image(picBack, 0, 0, 800, 600);

    //initial wins/losses
    team1Wins = 5;
    team1Losses = 5;
    team2Wins = 6;
    team2Losses = 3;
    team3Wins = 3;
    team3Losses = 4;
    noLoop(); //draw function will not repeat unless draw() is called
              //saves CPU/GPU
}

function draw() {
    background(255, 255, 200);
    image(picBack, 0, 0, 800, 600);
    //draw fixed content
    textFont(font1);
    textSize(60);
    fill(0);
    noStroke();
    textAlign(CENTER, TOP);
    text("Results are in!", width / 2, 5);
    textAlign(LEFT, CENTER);
    textFont('Georgia');
    textSize(12);
    text("* Press 'q' to add a win for the '" + team1Name + "'!", 550, 250);
    text("   Press 'w' to add a win for the '" + team2Name + "'!", 550, 265);
    text("   Press 'e' to add a win for the '" + team3Name + "'!", 550, 280);

    //table heading
    textFont(font1);
    textSize(30);
    textAlign(LEFT, CENTER);
    let span = 180;
    text("Team", 100, 100);
    text("Wins", 100 + (1 * span), 100);
    text("Losses", 100 + (2 * span), 100);
    text("Points", 100 + (3 * span), 100);

    //table
    stroke(100);
    let rowHeight = 30;
    line(50, 120, 750, 120);
    line(50, 120 + (1 * rowHeight), 750, 120 + (1 * rowHeight));
    line(50, 120 + (2 * rowHeight), 750, 120 + (2 * rowHeight));
    line(50, 120 + (3 * rowHeight), 750, 120 + (3 * rowHeight));

    line(40 + (1 * span), 90, 40 + (1 * span), 210);
    line(40 + (2 * span), 90, 40 + (2 * span), 210);
    line(40 + (3 * span), 90, 40 + (3 * span), 210);

    //results
    textAlign(LEFT, TOP);
    textFont('Georgia');
    textSize(22);
    text(team1Name, 80, 125 + (0 * rowHeight));
    text(team2Name, 80, 125 + (1 * rowHeight));
    text(team3Name, 80, 125 + (2 * rowHeight));

    text(team1Wins, 300, 123 + (0 * rowHeight));
    text(team2Wins, 300, 125 + (1 * rowHeight));
    text(team3Wins, 300, 125 + (2 * rowHeight));

    text(team1Losses, 490, 123 + (0 * rowHeight));
    text(team2Losses, 490, 125 + (1 * rowHeight));
    text(team3Losses, 490, 125 + (2 * rowHeight));

    team1Points = 2 * team1Wins;
    team2Points = 2 * team2Wins;
    team3Points = 2 * team3Wins;
    text(team1Points, 650, 123 + (0 * rowHeight));
    text(team2Points, 650, 125 + (1 * rowHeight));
    text(team3Points, 650, 125 + (2 * rowHeight));

}

//todo: add more keys to reduce or add looses
function keyPressed() {
    if (key === 'q') {
        team1Wins += 1;
    }
    else if (key === 'w') {
        team2Wins += 1;
    }
    else if (key === 'e') {
        team3Wins += 1;
    }
    redraw(); //only re-draw() if something changes and we daw something new
}

