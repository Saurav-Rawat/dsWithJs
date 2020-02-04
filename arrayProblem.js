/**
 * write a function that takes two arrays and
 *  returns true if the values in the corresponding
 * element in second array is equal to square of element
 *  of first array.
 */

// time complexity O(n)
function same(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] * array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

let arrayfirst = [1, 4, 3];
let arraysecond = [1, 16, 9];
console.log(same(arrayfirst, arraysecond));
