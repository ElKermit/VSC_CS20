/*
* CS 20
* Unit 1
* Practice 4
* working with variables and user input
*/

/** Global Variables */
let eventName = " 2022 Mega Event";
let ticketPrice;
let preSaleDiscount;
let multiDiscount2To4;
let multiDiscount5To9;
let multiDiscount10Plus;
let totalTicketCount = 0;
let singleTicketPrice=0.0; //used during coomputation of total amount
let totalAmountDue=0.0;
let isPreSale = false;
let userInput = "";

function setup() {
  createCanvas(1000, 400);
  background(200, 200, 100);
  
  ticketPrice = 100; // single ticket price! for one person at event date (door price)
  preSaleDiscount = 0.20; // 20% discount per ticket! if you buy the ticket before the event date
  multiDiscount2To4 = 0.05 // 5% discount per ticket! if you buy at least two but less than 5
  multiDiscount5To9 = 0.08 // 8% discount per ticket! if you buy at least five but less than 10
  multiDiscount10Plus = 0.15 // 15% discount per ticket! if you buy 10 or more tickets
}

function draw() {
  //clear();
  //introduction
  background(200, 200, 100);
  textSize(40);
  text("Welcome to '" + eventName + "' Ticket Sale", 50, 50);
  textSize(30);
  text("Is this a pre-sale or door-sale? ", 50, 100);

  // create input box
  let inputElem1 = createInput('');
  inputElem1.input(onInput1);
  inputElem1.position(50, 50)

  //userInput = window.prompt("Enter 'p' for pre-sale, 'd' for dore-sale! ");
  if (userInput == 'p') {
    isPreSale = true;
  }
  else { //tip: we don't need to check if input == 'd' in this case, we can assume if it is not =='p' it is a door-sale
    isPreSale = false;
  }

  text("How many tickets would you like to buy? ", 50, 150);
  let inputElem2 = createInput('');
  inputElem2.input(onInput2);
  inputElem2.position(50, 150)

  //userInput = window.prompt("Enter a number from 1 to 99 ");
  totalTicketCount = parseInt(userInput); //in RL this would need testing to make sure the input is a POSITIVE INTEGER.
  // i.e. by using a try..catch an repeat question until the input is correct

  //output to user, first repeat the collected data
  textSize(35);
  if (isPreSale) {
    text("You want to buy: " + totalTicketCount + " ticket(s) in pre-sale", 50, 280);
  }
  else {
    text("You want to buy: " + totalTicketCount + " ticket(s) at the door", 50, 280);
  }
  //compute total
  if (isPreSale) {
    if (totalTicketCount < 2) {
      singleTicketPrice= ticketPrice - (ticketPrice * preSaleDiscount);
      totalAmountDue = totalTicketCount * singleTicketPrice ;
    }
    else if (totalTicketCount < 5) {
      singleTicketPrice= ticketPrice - (ticketPrice * preSaleDiscount) - (ticketPrice * multiDiscount2To4);
      totalAmountDue = totalTicketCount * singleTicketPrice;
    }
    else if (totalTicketCount < 10) {
      singleTicketPrice = ticketPrice - (ticketPrice * preSaleDiscount) - (ticketPrice * multiDiscount5To9);
      totalAmountDue = totalTicketCount * singleTicketPrice;
    }
    else { //at this point the only option left is 10 or more, we don't need to test for that
      singleTicketPrice = ticketPrice - (ticketPrice * preSaleDiscount) - (ticketPrice * multiDiscount10Plus);
      totalAmountDue = totalTicketCount * singleTicketPrice;
    }
  }
  else { //identical math, just without the pre-sale discount
    if (totalTicketCount < 2) {
      singleTicketPrice = ticketPrice ;
      totalAmountDue = totalTicketCount * singleTicketPrice ;
    }
    else if (totalTicketCount < 5) {
      singleTicketPrice = ticketPrice -  (ticketPrice * multiDiscount2To4);
      totalAmountDue = totalTicketCount * singleTicketPrice;
    }
    else if (totalTicketCount < 10) {
      singleTicketPrice = ticketPrice -  (ticketPrice * multiDiscount5To9);
      totalAmountDue = totalTicketCount * singleTicketPrice;
    }
    else { //at this point the only option left is 10 or more, we don't need to test for that
      singleTicketPrice = ticketPrice -  (ticketPrice * multiDiscount10Plus);
      totalAmountDue = totalTicketCount * singleTicketPrice;
    }
  }

  //output single ticket coast
  textSize(25);
  text("Single ticket price: " + singleTicketPrice + " $", 50, 320);

  //output total due
  textSize(35);
  text("Total amount due: " + totalAmountDue + " $", 50, 360);

  //run again/quit?
  //userInput = window.confirm("Press 'OK' to run again, press 'Cancel' to quit ");

  // if (userInput==true){ //OK was pressed
  //   loop(); //this is P5's way of saying execute 'draw()' again
  // }else{
    noLoop(); //this is P5's way of stopping the draw function
  // }

}

function onInput1() {

  // get the text entered
  fill("black")
  return this.value();
}

function onInput2() {
  // get the text entered
  fill("black")
  return this.value();

}