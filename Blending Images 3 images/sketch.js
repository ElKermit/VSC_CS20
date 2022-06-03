/* Mason Klekta
* CS 20
* Unit 1
* Example 8
* 
  -upload two images to the image folder and use transparency 
   to animate "blend the two images
*/


function setup() {

  console.debug(findTheLarger(3, 4));
  console.debug(findTheLarger(5, 4));
  console.debug(findTheLarger(4, 4));

}


function findTheLarger(n1, n2) {
  if (n1 > n2) {
    return n1 + " is larger than " + n2;
  }
  else if (n1 < n2) {
    return n2 + " is larger than " + n1;
  }
  else {
    return "both numbers are equal"
  }
}