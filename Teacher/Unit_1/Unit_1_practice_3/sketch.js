/*
* CS 20
* Unit 1
* Practise 1
*/

/** Some intro text */

let largestNumber = 0;

function setup() {
  let numbers = [2,3,5,6];
  numbers.forEach(num => {
    testEvenOdd(num);
    displayNumber(num);
    findLargestNumber(num);
  });

}

function testEvenOdd(number) {
  //using an iff statement, check if the variable 'number' is even...
  //print out the result using the print statement
  
}

function displayNumber(number) {
  //instructions
  print("the number entered is: "+number);
}

function findLargestNumber(number){
  if (number > largestNumber){
    largestNumber = number;
  }
  print("current largest number is: " + number)
}

// function testEvenOdd(number) {
//   if (number % 2 == 0) {
//     print(number + " is even")
//   }
//   else {
//     print(number + " is odd")
//   }
// }