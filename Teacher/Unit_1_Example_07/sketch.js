/*
* CS 20
* Unit 1
* Example 7
*/

/** Global Variables */
let eventName = "Big Fish Concert";
let preSales;
let daySales;
let prePrice = 15;
let dayPrice = 20;
let totalSales;

function setup() {
  let sketch = createCanvas(600, 400);

  background(150, 50, 50);
  textSize(18);
  preSales = 200;
  daySales = window.prompt("How many tickets did we sell today?");
  // window.alert("Total tickets sold is " +  (preSales + daySales) );
}

function draw() {
  background(150, 250, 250);
  textSize(40);
  text(eventName, 50, 50);
  textSize(18);
  text("Presales: " + preSales, 50, 100);
  text("Price $" + prePrice, 200, 100);

  text("Today sales: " + daySales, 50, 125);
  text("Price $" + dayPrice, 200, 125);

  totalSales = preSales * prePrice + daySales * dayPrice;
  text("Our total is $" + totalSales, 50, 200);

}

function keyPressed() {
  daySales++;
}
