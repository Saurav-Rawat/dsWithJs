/**
 * write a function that takes array of sorted numbers(negative and positive) and returns the first pair sum of which is zero
 * eg i/p=[-1,-2,-3,0,1,2,3];
 * o/p=[-3,3],[-1,1] etc
 */

let testArray = [-3, -2 - 1, 0, 1, 2, 19];
function sumZero(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

const result = sumZero(testArray);
console.log(result);
