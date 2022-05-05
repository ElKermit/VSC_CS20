/*
* CS 20
* Unit 1
* Practise 2
*/

/** Some intro text */

var largestNumber = 0;

function setup() {
  let numbers = [2,3,5,6,3,4,9,2,3];
  numbers.forEach(num => {

    findLargestNumber(num);
  });

  print("final largest number: " + largestNumber)

}

function findLargestNumber(number){
  if (number > largestNumber){
    largestNumber = number;
  }
  print("current largest number is: " + largestNumber)
}
