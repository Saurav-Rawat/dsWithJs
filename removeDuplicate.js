/**
 * remove duplicate elements from array
 */

/**
 * complexity O(n)
 *removes duplicate elements from given array
 * @param  array test array with duplicate elements
 */
function removeDuplicate(array) {
  let i = 0;
  if (!array.length) return [];
  for (let j = 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      array.splice(i, 1);
      i++;
    }
  }
  return array;
}

let testArray = [1, 1, 2, 2, 4, 5, 6];
console.log(removeDuplicate(testArray));
