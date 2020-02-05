/**
 * write a function to calculate the count of unique(non-counting repeating ones) number in a array
 */

//complexity O(n)
function uniqueNumCount(testArray) {
  let i = 0;
  //empty array
  if (testArray.length === 0) return 0;
  //multiple pointers approach
  for (var j = 1; j < testArray.length; j++) {
    if (testArray[i] !== testArray[j]) {
      i++;
      testArray[i] = testArray[j];
    }
  }
  return i - 1;
}

array1 = [7, 7, 2, 3, 1, 3, 1, 4];
console.log(uniqueNumCount(array1));
