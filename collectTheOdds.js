/**
 * write a function that takes an input array cosisting of positive numbers and
 * returns an array of all the odd numbers in the array
 */

function finTheOdds(array) {
  newArr = [];
  if (array.length === 0) {
    return newArr;
  }
  if (array[0] % 2 !== 0) {
    newArr.push(array[0]);
  }
  newArr = newArr.concat(finTheOdds(array.slice(1)));
  return newArr;
}

testArray = [1, 3, 4, 5, 6, 3];
console.log(finTheOdds(testArray));
