/**
 * write a function to print a factorial of a given input number
 */

function recursionFactorial(num) {
  if (num === 1) return 1;
  else if (num === 0) return 1;
  else if (num < 0) return "well thats a bad idea";

  return num * recursionFactorial(num - 1);
}

console.log(recursionFactorial(3));

/**
 * write a program which takes to input a number and its power(exponential)
 * than return its exponential solution
 */

function findPower(base, power) {
  if (power === 0) {
    return 1;
  }
  return base * findPower(base, power - 1);
}

console.log(findPower(2, 3));

/**
 * function that returns the multiplication of all the elements in array
 */

function multiplyArray(array) {
  if (!array.length) {
    return 1;
  }
  return array[0] * multiplyArray(array.slice(1));
}

console.log(multiplyArray([2, 2, 2, 3]), "multiply array elements");
