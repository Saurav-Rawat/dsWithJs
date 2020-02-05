/**
 * Sum of numbers with even number of 1’s in their binary representation
 */

function toBinary(num) {
  return (num >>> 0).toString(2);
}

function returnSumOfNumbersWithEvenOnesInBinary(array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    obj = {};
    binary = toBinary(array[i]);
    for (let j = 0; j < binary.length; j++) {
      obj[1] ? obj[1]++ : (obj[1] = 1);
    }
    obj["1"] % 2 === 0 ? (sum = sum + array[i]) : "";
  }
  return sum;
}

let testArray = [4, 9, 15];
console.log(returnSumOfNumbersWithEvenOnesInBinary(testArray));
